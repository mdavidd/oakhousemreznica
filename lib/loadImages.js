import fs from "fs";
import path from "path";

export const getImages = () => {
  const directoryPath = path.join(process.cwd(), "public/assets/about");
  const filenames = fs.readdirSync(directoryPath);

  return filenames
    .filter((filename) => filename.endsWith(".jpeg"))
    .map((filename) => ({
      src: `/assets/about/${filename}`,
      width: 4, // You can customize these values or dynamically calculate them
      height: 3, // based on the actual dimensions of your images.
    }));
};
