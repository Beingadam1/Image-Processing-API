import sharp from "sharp";

const imgCropper = async (file: string, output: string, width: number, height: number): Promise<void> => {
  await sharp(file).resize(width, height).toFile(output);
};

export default imgCropper;
