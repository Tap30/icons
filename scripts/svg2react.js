// import fs from "fs";
// import path from "path";
//
// const inputDir = "icons";
// const outputDir = "src/lit/icons";
// const iconGridDocsDir = "docs/components";
//
// let rootIndexContent = [];
// let iconsStoriesTemplates = [];
// let iconGridDocsTemplate = [];
//
// // Ensure output directory exists
// if (!fs.existsSync(outputDir)) {
//   fs.mkdirSync(outputDir, { recursive: true });
// }
//
// function toPascalCase(name) {
//   return name
//     .split("-")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join("");
// }
//
// function adjustSvgIndent(svgContent) {
//   const lines = svgContent.split("\n");
//   let indentedLines = [];
//   let indentLevel = 0;
//
//   lines.forEach((line) => {
//     line = line.replace("black", "currentColor");
//     if (line.trim().startsWith("</")) {
//       indentLevel -= 1;
//     }
//     indentedLines.push("      " + "  ".repeat(indentLevel) + line);
//     if (
//       line.includes("<") &&
//       line.includes(">") &&
//       !line.trim().endsWith("/>") &&
//       !line.includes("</")
//     ) {
//       indentLevel += 1;
//     }
//   });
//   return indentedLines.join("\n");
// }
//
// function generateFiles(svgFilename, svgContent) {
//   const baseName = svgFilename.split(".")[0];
//   const pascalCaseName = toPascalCase(baseName);
//   const outputFolder = path.join(outputDir, baseName);
//   if (!fs.existsSync(outputFolder)) {
//     fs.mkdirSync(outputFolder, { recursive: true });
//   }
//
//   // Generate index.ts
//   fs.writeFileSync(
//     path.join(outputFolder, "index.ts"),
//     `import {customElement} from "lit/decorators.js";
// import { ${pascalCaseName}Icon } from "./${baseName}";
//
// @customElement("tap-icon-${baseName}")
// export class TapIcon${pascalCaseName} extends ${pascalCaseName}Icon {
// }
//
// declare global {
//   interface HTMLElementTagNameMap {
//     "tap-icon-${baseName}": TapIcon${pascalCaseName};
//   }
// }
// `
//   );
//
//   // Generate <svg-name>.ts with indented SVG content
//   const indentedSvgContent = adjustSvgIndent(svgContent);
//   fs.writeFileSync(
//     path.join(outputFolder, `${baseName}.ts`),
//     `import {html} from "lit";
// import {TapIcon} from "../../icon";
//
// export class ${pascalCaseName}Icon extends TapIcon {
//   render() {
//     return this.renderIcon(html\`
// ${indentedSvgContent}\`);
//   }
// }
// `
//   );
//
//   rootIndexContent.push(
//     `export { TapIcon${pascalCaseName} } from './${baseName}';`
//   );
//   iconsStoriesTemplates.push(
//     `<tap-icon-${baseName} color=\${color} width=\${width} height=\${height}></tap-icon-${baseName}>`
//   );
//   iconGridDocsTemplate.push(
//     `<IconPreview><tap-icon-${baseName}></tap-icon-${baseName}></IconPreview>`
//   )
// }
//
//
// // Process SVG files in the input directory
// fs.readdir(inputDir, (err, files) => {
//   if (err) {
//     console.error("Error reading input directory:", err);
//     return;
//   }
//
//
//   files.forEach((file) => {
//     if (file.endsWith(".svg")) {
//       const svgContent = fs.readFileSync(path.join(inputDir, file), "utf8");
//       generateFiles(file, svgContent);
//     }
//   });
//
//   // After all files have been processed:
//   rootIndexContent.sort();
//   iconsStoriesTemplates.sort();
//   iconGridDocsTemplate.sort();
//
//   // Write the aggregated index.ts in the output directory
//   fs.writeFileSync(
//     path.join(outputDir, "index.ts"),
//     rootIndexContent.join("\n")
//   );
//
//   // Generate icons.stories.ts with dynamic SVG icon templates
//   let iconsStoriesContent = `import {html, TemplateResult} from "lit";
// import "./index";
//
// export default {
//   title: "Icons",
//   component: "tap-icon",
//   argTypes: {
//     height: {
//       control: {type: "number"},
//       description: "The icon height",
//       defaultValue: 24,
//     },
//     width: {
//       control: {type: "number"},
//       description: "The icon width",
//       defaultValue: 24,
//     },
//     color: {
//       control: {type: "text"},
//       description: "The icon color, accepts CSS values",
//       defaultValue: "inherit",
//     },
//   },
// };
//
// interface Story<T> {
//   (args: T): TemplateResult;
//
//   args?: Partial<T>;
//   argTypes?: Record<string, unknown>;
// }
//
// interface ArgTypes {
//   height: number,
//   width: number,
//   color: string,
// }
//
// const IconSetTemplate: Story<ArgTypes> = ({ height, width, color }: ArgTypes) => html\`
// <div style="display: flex; flex-wrap: wrap">
// `;
//
//   iconsStoriesTemplates.forEach((line) => {
//     iconsStoriesContent += `  ${line}\n`;
//   });
//
//   iconsStoriesContent += `
//   </div>\`;
//
// export const IconSet = IconSetTemplate.bind({});
//
// IconSet.args = { height: 24, width: 24, color: 'black' };
// `;
//
//   fs.writeFileSync(
//     path.join(outputDir, "icons.stories.ts"),
//     iconsStoriesContent
//   );
//
//   let iconGridDocsContent = `<template>
//   <div class="icon-grid">
// `
//     iconGridDocsTemplate.forEach((line) => {
//       iconGridDocsContent += `\t\t${line}\n`
//     })
//
//     iconGridDocsContent += `
//   </div>
// </template>
//
// <script setup>
// import '../../${outputDir}';
// import IconPreview from './IconPreview.vue';
// </script>
//
// <style scoped>
//   .icon-grid {
//     display: flex;
//     flex-wrap: wrap;
//     gap: 16px;
//   }
// </style>
// `
//
//   fs.writeFileSync(
//     path.join(iconGridDocsDir, "IconGrid.vue"),
//     iconGridDocsContent
//   );
// });