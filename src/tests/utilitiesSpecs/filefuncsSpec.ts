/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { checkExt, fileExist } from "../../utilities/filefuncs";
import path from "path";

const file = `${path.resolve("./")}/package.json`;

describe("Test the fileFunc functions", () => {
  describe("Test the checkExt function", () => {
    it("test the checkExt function with malformed filename", () => {
      expect(checkExt("image.jpg")).toBeTruthy();
    });
    it("test the checkExt function with correct filename", () => {
      expect(checkExt("image")).toBeFalsy();
    });
  });

  describe("Test the fileExist function", () => {
    it("test the fileExist function with non-existing file", () => {
      expect(fileExist("invalid path")).toBeFalsy();
    });
    it("test the fileExist function with existing file", () => {
      expect(fileExist(file)).toBeTruthy();
    });
  });
});
