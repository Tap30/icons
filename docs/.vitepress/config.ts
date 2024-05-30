import { defineConfig } from 'vitepress';
import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react';
import path from 'path';
import sidebar from './sidebar'
// Import other necessary configurations and JSON files
import fs from 'node:fs';
import type { Package } from 'custom-elements-manifest';

const manifest = JSON.parse(fs.readFileSync('dist/custom-elements.json').toString()) as Package;

const formatIconName = (name: string) => name?.split('tap-icon-')?.[1]?.trim()?.replaceAll('-', ' ');

const components = manifest.modules
  .map((module) => {
    if (!module.exports) throw new Error(`Module has no export: ${module.path}`);

    const components = module.exports.filter((exp) => exp.kind === 'custom-element-definition');

    const component = components[0];

    return {
      link: '/components/' + component?.name,
      text: formatIconName(component?.name),
    };
  });

export default defineConfig({
  title: 'Tapsi components',
  description: 'A set of icons based on Tapsi design system.',
  base: "/icons/",
  themeConfig: {
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Tap30/icons' },
    ],
  },
});
