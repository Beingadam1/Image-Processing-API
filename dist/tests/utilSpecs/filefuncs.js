"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var filefuncs_1 = require("../../utilities/filefuncs");
var path_1 = __importDefault(require("path"));
var file = path_1.default.resolve("./") + "/package.json";
describe("Test the filefuncs functions", function () {
    describe("Test the fileExist function", function () {
        it("test the fileExist function for non-existing file", function () {
            expect((0, filefuncs_1.fileExist)("invalid path")).toBeFalsy();
        });
        it("test the fileExist function for existing file", function () {
            expect((0, filefuncs_1.fileExist)(file)).toBeTruthy();
        });
    });
    describe("Test the checkExt function", function () {
        it("test the checkExt function for mispelled filename", function () {
            expect((0, filefuncs_1.checkExt)("image.jpg")).toBeTruthy();
        });
        it("test the checkExt function for correct filename", function () {
            expect((0, filefuncs_1.checkExt)("image")).toBeFalsy();
        });
    });
});
