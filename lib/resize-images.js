const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.resolve("./public/assets/about");
const outputDir = path.resolve("./public/assets/about/optimized");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file) => {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file);

    sharp(inputPath)
      .rotate()
      .resize(800) // Resize to 800px width
      .toFile(outputPath, (err, info) => {
        if (err) {
          console.error("Error processing file:", err);
        } else {
          console.log("File processed:", info);
        }
      });
  });
});
