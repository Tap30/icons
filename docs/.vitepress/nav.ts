import { DefaultTheme } from "vitepress";

export default [
  {
    text: 'Getting Started',
    link: '/getting-started',
    target: '_self',
  },
  {
    text: 'Icons',
    link: '/all',
    target: '_self',
  },
  {
    text: 'Related Links',
    items: [
      { text: 'Design System', link: 'https://tap30.github.io/web-components', target: '_blank' },
    ],
  }
] as DefaultTheme.NavItem[]
