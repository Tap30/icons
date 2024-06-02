import fs from "fs";
import path from "path";
import {configFilePath, inputDir, outputDir} from "./constants.js";
import cliProgress from "cli-progress";
import colors from "ansi-colors";
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
  const bar = new cliProgress.SingleBar({
    format: '{percentage}% ({value}/{total}) |' + colors.yellow('{bar}') + '|',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true
  }, cliProgress.Presets.shades_classic);
  bar.start(files.length, 0);
  files.forEach((file, index) => {
    bar.update(index + 1);
    const id = file.split(".")?.[0];
    if (file.endsWith(".svg")) {
      const svgContent = fs.readFileSync(path.join(inputDir, file), "utf8").replaceAll('\n', '');
      config[id] = {...config[id], svgContent, id}
    } else if (file.endsWith(".json")) {
      const jsonContent = JSON.parse(fs.readFileSync(path.join(inputDir, file), "utf8").replaceAll('\n', ''));
      if (jsonContent.categories?.length > 0) {
        config[id] = {
          ...config[id],
          categories: jsonContent.categories.reduce((a, b) => [...a, ...(categoriesContent[b] || [])], [])
        }
      }
    }
  });
  bar.stop();

  fs.writeFileSync(
    configFilePath,
    JSON.stringify(config, null, 2)
  );
});
