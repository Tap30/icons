import fs from 'fs';
import { Sidebar, SidebarItem } from './types';

type Content = { name: string; title: string }

const getCategories = (): SidebarItem[] => {
  const categories = JSON.parse(fs.readFileSync('docs/.vitepress/data/categories.json').toString()) as Content[];
  return categories.map((category) => ({ link: `/category/${category.name}`, text: category.title }))
}

const getPackages = (): SidebarItem[] => {
  const packages = JSON.parse(fs.readFileSync('docs/.vitepress/data/packages.json').toString()) as Content[];
  return packages.map((pck) => ({ link: `/package/${pck.name}`, text: pck.title }))
}

export default [
  { text: 'Getting Started', link: '/getting-started' },
  {
    text: 'All Icons',
    link: '/',
  },
  {
    text: 'Categories',
    collapsed: true,
    items: getCategories(),
  },
  {
    text: 'Packages',
    collapsed: true,
    items: getPackages(),
  },
] as Sidebar[]
