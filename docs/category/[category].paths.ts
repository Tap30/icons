import fs from 'fs';

const packages = JSON.parse(
  fs.readFileSync('docs/.vitepress/data/categories.json').toString(),
) as {
  name: string;
  title: string;
  items: string[];
}[];

export default {
  paths() {
    return packages.map((pck) => ({
      params: { category: pck.name, items: pck.items },
    }));
  },
};
