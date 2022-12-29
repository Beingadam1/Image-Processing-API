import express from "express";
import path from "path";
import { checkExt, fileExist, makeDir } from "../utilities/filefuncs";
import imgCropper from "../utilities/cropper";

const crop = express.Router();
const link = "http://localhost:4000/crop?filename=fjord&width=150&height=200";

crop.get("/", async (req: express.Request, res: express.Response) => {
  const { filename, width, height } = req.query;
  const imgDir = path.resolve("./") + "/images/";
  const outputDir = imgDir + "thumbnails/";
  const targetImage = `${imgDir}${filename}.jpg`;

  if (Object.keys(req.query).length === 0) {
    return res.status(200).send(`Welcome to Image manipulation API endpoint, Please fill up the url like this ${link}`);
  }

  if (!filename || !width || !height || isNaN(Number(width)) || isNaN(Number(height))) {
    return res.status(400).send("Error, some parameters are missing");
  }

  if (checkExt(String(filename))) {
    return res.status(400).send("Filename should not contain any extension");
  }

  if (!fileExist(targetImage)) {
    return res.status(404).send("Image not found");
  }

  if (!fileExist(outputDir)) {
    makeDir(outputDir);
  }

  // Cache
  const outputImage = outputDir + `${filename}-thumbnail-${width}x${height}.jpg`;
  if (fileExist(outputImage)) {
    res.sendFile(outputImage);
  } else {
    await imgCropper(targetImage, outputImage, Number(width), Number(height));
    await res.sendFile(outputImage);
  }
});

export default crop;
