import { existsSync, mkdirSync } from "fs";

// make/create a directory
const makeDir = (dirLocation: string): void => {
  return mkdirSync(dirLocation);
};

// synchronously check for file existence
const checkExt = (fileName: string): boolean => {
  return fileName.includes(".jpg" || ".png" || ".gif" || ".jpeg");
};

// check if the file have an extension
const fileExist = (imageLocation: string): boolean => {
  return existsSync(imageLocation);
};

export { checkExt, fileExist, makeDir };
