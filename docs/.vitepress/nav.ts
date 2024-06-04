import { DefaultTheme } from "vitepress";

export default [
  {
    text: 'Icons',
    link: '/all',
    target: '_self',
  },
  {
    text: 'Packages',
    items: [
      { text: 'Lit', link: '/package/lit' },
      { text: 'React', link: '/package/react' }
    ],
  },
  {
    text: 'Related Links',
    items: [
      {text: 'Web Components', link: 'https://tap30.github.io/web-components', target: '_blank'},
    ],
  }
] as DefaultTheme.NavItem[]
