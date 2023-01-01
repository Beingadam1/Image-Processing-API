import { existsSync, mkdirSync } from "fs";

// make/create a directory
const makeDir = (dirLocation: string): void => {
  return mkdirSync(dirLocation);
};

// check if the fileName contain extention
const checkExt = (fileName: string): boolean => {
  return fileName.includes(".jpg" || ".png" || ".gif" || ".jpeg");
};

// check if the file have an extension
const fileExist = (imageLocation: string): boolean => {
  return existsSync(imageLocation);
};

export { checkExt, fileExist, makeDir };
