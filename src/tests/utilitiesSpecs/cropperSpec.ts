/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import path from "path";
import imgCropper from "../../utilities/cropper";

describe("Test image cropping using Sharp", () => {
  it("should get the cropped image with the specified width and height", async () => {
    const file: string = path.join(__dirname, "../", "../", "../", "images", "fjord.jpg");
    const output: string = path.join(
      __dirname,
      "../",
      "../",
      "../",
      "images",
      "thumbnails/",
      "fjord-thumbnails-200x200.jpg"
    );

    await imgCropper(file, output, 200, 200);

    expect(output).toBeTruthy();
  });
});
