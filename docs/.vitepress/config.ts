import { defineConfig } from 'vitepress';
import sidebar from './sidebar'
import socialLinks from "./socialLinks";
import nav from "./nav";

export default defineConfig({
  title: 'Tapsi Icons',
  description: 'A set of icons based on Tapsi design system.',
  base: "/icons/",
  themeConfig: {
    sidebar,
    socialLinks,
    nav,
  },
});
