import { defineConfig } from 'vitepress';
import sidebar from './sidebar'
import socialLinks from "./socialLinks";
import nav from "./nav";

export default defineConfig({
  title: 'Tapsi Icons',
  description: 'A set of icons based on Tapsi design system.',
  base: "/icons/",
  lastUpdated: true,
  themeConfig: {
    sidebar,
    socialLinks,
    nav,
    footer: {
      copyright: 'Copyright © 2024-present Tapsi Front-End Team'
    }
  },
});
