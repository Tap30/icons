import fs from "fs";
import path from "path";
import {configFilePath, inputDir, outputDir} from "./constants.js";
import colors from "ansi-colors";
import {adjustSvgIndent} from "./common.js";
const config = {};

fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error("Error reading input directory:", err);
    return;
  }

  const categoriesContent = JSON.parse(fs.readFileSync('docs/.vitepress/data/categories.json', "utf8").replaceAll('\n', '')).reduce((a, b) => ({
    ...a,
    [b.name]: b.items
  }));

  // Ensure dist directory exists
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist', {recursive: true});
  }
  console.info("Generating `dist/config.json`:")
  files.forEach((file, index) => {
    console.info(`[${colors.yellow(index + 1)}/${colors.yellow(files.length)}] Processing ${colors.cyan(file)}...`);

    const id = file.split(".")?.[0];

    if (file.endsWith(".svg")) {
      const svgContent = fs.readFileSync(path.join(inputDir, file), "utf8").replaceAll('\n', '');
      config[id] = {...config[id], svgContent: adjustSvgIndent(svgContent), id}

    } else if (file.endsWith(".json")) {
      const jsonContent = JSON.parse(fs.readFileSync(path.join(inputDir, file), "utf8").replaceAll('\n', ''));
      if (jsonContent.categories?.length > 0) {
        config[id] = {
          ...config[id],
          categories: jsonContent.categories.reduce((a, b) => [...a, ...(categoriesContent[b] || [])], []),
          description: jsonContent.description
        }
      }
    }
  });

  fs.writeFileSync(
    configFilePath,
    JSON.stringify(config, null, 2)
  );
});

console.info("✨ Done")
