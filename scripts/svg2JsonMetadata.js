import fs from "fs";

fs.readdir('icons/', (err, files) => {
  files.forEach((file, idx) => {
    if (file.endsWith(".svg")) {
      const iconName = file.split('.svg')[0];

      console.info(`[${idx + 1}/${files.length}] Generating "${iconName}.json"...`)

      fs.writeFileSync(
        `icons/${iconName}.json`,
        JSON.stringify({
          name: iconName,
          categories: [],
          tag: ['test'],
        }, null, 2)
      )
    }

  })
  console.info("✨ All JSON files were successfully generated")
})
