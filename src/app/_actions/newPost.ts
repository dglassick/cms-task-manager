'use server';

import path from "path";
import * as fs from 'fs';


export const generateNewPost = (data) => {
    var fileName = data.title.toLowerCase().split(" ").join("");
        var fileContents = `---
      title: "${data.title}"
      subtitle: "${data.subtitle}"
      publisedAt: "${new Date()}"
      layout: Page
      ---
      ${data.postbody}
      `
        var outputPath = path.join(process.cwd(), 'src/app/content', `${fileName}.md`)
        console.log(outputPath);
      
        fs.writeFile(outputPath, fileContents, function (err) {
          if (err) {
            return console.log(err)
          }
          return console.log(outputPath + ' file generated')
        })
}