import { checkExt, fileExist } from "../../utilities/filefuncs";
import path from "path";

const file = `${path.resolve("./")}/package.json`;

describe("Test the filefuncs functions", () => {
  describe("Test the fileExist function", () => {
    it("test the fileExist function for non-existing file", () => {
      expect(fileExist("invalid path")).toBeFalsy();
    });
    it("test the fileExist function for existing file", () => {
      expect(fileExist(file)).toBeTruthy();
    });
  });
  describe("Test the checkExt function", () => {
    it("test the checkExt function for mispelled filename", () => {
      expect(checkExt("image.jpg")).toBeTruthy();
    });
    it("test the checkExt function for correct filename", () => {
      expect(checkExt("image")).toBeFalsy();
    });
  });
});
