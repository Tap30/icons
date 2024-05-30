export type SidebarItem = { link: string; text: string };

export type Sidebar = {
  text: string;
  link?: string;
  items?: SidebarItem[];
  collapsed?: boolean;
}
