import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const dirRelativeToPublicFolder = "assets/about/optimized";
  const dir = path.resolve("./public", dirRelativeToPublicFolder);
  const filenames = fs.readdirSync(dir);

  const images = filenames.map((name) =>
    path.join(dirRelativeToPublicFolder, name).replace(/\\/g, "/")
  );

  res.status(200).json(images);
}
