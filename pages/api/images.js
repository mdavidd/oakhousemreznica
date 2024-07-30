import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const dir = path.resolve("./public/assets/about");
  const files = fs.readdirSync(dir);

  const images = files
    .filter((file) => file.endsWith(".jpeg"))
    .map((file) => ({
      src: `/assets/about/${file}`,
      width: 4, // Replace with actual width if known
      height: 3, // Replace with actual height if known
    }));

  res.status(200).json(images);
}
