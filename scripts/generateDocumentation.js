import fs from "fs";
import path from "path";
import {configFilePath, iconGridDocsDir, outputDir} from "./constants.js";
import colors from 'ansi-colors';

let iconGridDocsTemplate = [];

const config = JSON.parse(fs.readFileSync(configFilePath).toString());

console.log("Generating Vitepress Documentation from SVG Files:")

Object.keys(config).forEach((file, index) => {
  console.info(`[${colors.yellow(index + 1)}/${colors.yellow(Object.keys(config).length)}] Adding ${colors.cyan(file)} to the Documentation...`);
  iconGridDocsTemplate.push(
    `<IconPreview
\t\t\tv-if="'${file}'.includes(search) && (!page?.params?.category || config['${file}']?.categories?.includes?.(page?.params?.category))"
\t\t\t:select-icon=selectIcon
\t\t\ttitle="${file}"
\t\t>
\t\t\t<tap-icon-${file}></tap-icon-${file}>
\t\t</IconPreview>`
  )
});

iconGridDocsTemplate.sort();

let iconGridDocsContent = `<template>
  <div class="icon-grid">
`
iconGridDocsTemplate.forEach((line) => {
  iconGridDocsContent += `\t\t${line}\n`
})

iconGridDocsContent += `
  </div>
</template>

<script setup>
import '../../${outputDir}';
import IconPreview from './IconPreview.vue';
import config from '../../dist/config'
import { useData } from 'vitepress';
const { page } = useData();
defineProps({
  selectIcon: String,
  search: String,
  category: String,
})

</script>

<style scoped>
  .icon-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  .control {
    position: fixed;
    top: var(--vp-nav-height);
    bottom: 0;
    right: 0;
    width: 100%;
    max-width: 256px;
    padding: 16px;
  }
</style>
`

fs.writeFileSync(
  path.join(iconGridDocsDir, "IconGrid.vue"),
  iconGridDocsContent
);

console.info("✨ Done")
