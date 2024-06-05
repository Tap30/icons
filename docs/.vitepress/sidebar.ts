import fs from 'fs';
import { DefaultTheme } from "vitepress";

type Content = { name: string; title: string }

const getCategories = (): DefaultTheme.SidebarItem[] => {
  const categories = JSON.parse(fs.readFileSync('docs/.vitepress/data/categories.json').toString()) as { name: string, items: string[] }[];
  return [
    {
      text: 'All Icons',
      link: '/all',
    },
    ...categories.map((category) => ({ link: `/category/${category.name}`, text: category.name }))
  ]
}

export default [
  { text: 'Getting Started', link: '/getting-started' },
  {
    text: 'Icon Categories',
    collapsed: false,
    items: getCategories(),
  },
] as DefaultTheme.SidebarItem[]
