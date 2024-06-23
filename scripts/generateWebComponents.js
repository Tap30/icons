import fs from "fs";
import path from "path";
import {configFilePath, outputDir} from "./constants.js";
import {adjustSvgIndent, toPascalCase} from "./common.js";
import colors from 'ansi-colors';


let rootIndexContent = [];
let iconsStoriesTemplates = [];

const config = JSON.parse(fs.readFileSync(configFilePath).toString());

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, {recursive: true});
}
console.log('Generating Lit Components:')
Object.keys(config).forEach((icon, index) => {
  console.info(`[${colors.yellow(index + 1)}/${colors.yellow(Object.keys(config).length)}] Generating ${colors.cyan(`<tap-icon-${icon} />`)}...`);

  const pascalCaseName = toPascalCase(icon);
  const outputFolder = path.join(outputDir, icon);
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder, {recursive: true});
  }

  // Generate index.ts
  fs.writeFileSync(
    path.join(outputFolder, "index.ts"),
    `import {customElement} from "lit/decorators.js";
import { ${pascalCaseName}Icon } from "./${icon}";

@customElement("tap-icon-${icon}")
export class TapIcon${pascalCaseName} extends ${pascalCaseName}Icon {
}

declare global {
  interface HTMLElementTagNameMap {
    "tap-icon-${icon}": TapIcon${pascalCaseName};
  }
}
`
  );

  // Generate <svg-name>.ts with indented SVG content
  const indentedSvgContent = adjustSvgIndent(config[icon].svgContent);
  fs.writeFileSync(
    path.join(outputFolder, `${icon}.ts`),
    `import { html } from 'lit';
import { TapIcon } from '../../icon';

export class ${pascalCaseName}Icon extends TapIcon {
  render() {
    return this.renderIcon(html\`
${indentedSvgContent}\`);
  }
}
`
  );

  rootIndexContent.push(
    `export { TapIcon${pascalCaseName} } from './${icon}';`
  );
  iconsStoriesTemplates.push(
    `<tap-icon-${icon} color=\${color} width=\${width} height=\${height}></tap-icon-${icon}>`
  );

})

// After all files have been processed:
rootIndexContent.sort();
iconsStoriesTemplates.sort();

console.info(`Generating ${colors.cyan(`src/web-components/icons/index.ts`)}...`);
// Write the aggregated index.ts in the output directory
fs.writeFileSync(
  path.join(outputDir, "index.ts"),
  rootIndexContent.join("\n")
);

// Generate icons.stories.ts with dynamic SVG icon templates
console.info(`Generating ${colors.cyan(`src/web-components/icons/icons.stories.ts`)}...`);

let iconsStoriesContent = `import { html, TemplateResult } from 'lit';
import './index';

export default {
  title: 'Icons',
  component: 'tap-icon',
  argTypes: {
    height: {
      control: {type: 'number'},
      description: 'The icon height',
      defaultValue: 24,
    },
    width: {
      control: {type: 'number'},
      description: 'The icon width',
      defaultValue: 24,
    },
    color: {
      control: {type: 'text'},
      description: 'The icon color, accepts CSS values',
      defaultValue: 'inherit',
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;

  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  height: number,
  width: number,
  color: string,
}

const IconSetTemplate: Story<ArgTypes> = ({ height, width, color }: ArgTypes) => html\`
<div style="display: flex; flex-wrap: wrap">
`;

iconsStoriesTemplates.forEach((line) => {
  iconsStoriesContent += `  ${line}\n`;
});

iconsStoriesContent += `
  </div>\`;

export const IconSet = IconSetTemplate.bind({});

IconSet.args = { height: 24, width: 24, color: 'black' };
`;

fs.writeFileSync(
  path.join(outputDir, "icons.stories.ts"),
  iconsStoriesContent
);
console.info("✨ Done")
