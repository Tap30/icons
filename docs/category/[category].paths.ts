import fs from 'fs';

const categories = JSON.parse(
  fs.readFileSync('docs/.vitepress/data/categories.json').toString(),
) as {
  name: string;
  title: string;
  description: string;
  items: string[];
}[];

export default {
  paths() {
    return [...categories].map((cat) => ({
      params: {
        category: cat.name,
        items: cat.items,
        description: cat.description,
      },
    }));
  },
};
