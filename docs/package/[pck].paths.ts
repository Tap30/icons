import fs from 'fs';

const packages = JSON.parse(
  fs.readFileSync('docs/.vitepress/data/packages.json').toString(),
) as { name: string; title: string }[];

export default {
  paths() {
    return packages.map((pck) => {
      let content = '';

      content += `#  ${pck.title} \n`;

      content += getInstallSection(pck.name);

      content += getImportSection(pck.name);

      content += getUsageSection(pck.name);

      return {
        params: { pck: pck.name },
        content,
      };
    });
  },
};

function getInstallSection(name: string) {
  return `
### Installation

If you are using node and NPM, you can install this component using npm:

::: code-group

\`\`\`bash [npm]
npm install @tapsi-oss/icons/${name}
\`\`\`

\`\`\`bash [yarn]
yarn add @tapsi-oss/icons/${name}
\`\`\`

\`\`\`bash [pnpm]
pnpm install @tapsi-oss/icons/${name}
\`\`\`

:::

`;
}

function getImportSection(name: string) {
  if (name === 'react')
    return `
### Import

Then import this component into your project:

\`\`\`js
import Map from '@tapsi-oss/icons/react';
\`\`\`
`;

  if (name === 'lit')
    return `

### Import

Then import this component into your project by using a bare module specifier:

\`\`\`js
import '@tapsi-oss/icons/${name}';
\`\`\`
`;

  return '';
}

function getUsageSection(name: string) {
  if (name === 'react')
    return `
### Usage

Now You can use components in your code:

\`\`\`js
<Map />
\`\`\`
`;

  if (name === 'lit')
    return `
### Usage

Now You can use components in your code:

\`\`\`js
<tap-icon-map></tap-icon-map>
\`\`\`
`;

  return '';
}
