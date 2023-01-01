"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
var filefuncs_1 = require("../../utilities/filefuncs");
var path_1 = __importDefault(require("path"));
var file = "".concat(path_1.default.resolve("./"), "/package.json");
describe("Test the fileFunc functions", function () {
    describe("Test the checkExt function", function () {
        it("test the checkExt function with malformed filename", function () {
            expect((0, filefuncs_1.checkExt)("image.jpg")).toBeTruthy();
        });
        it("test the checkExt function with correct filename", function () {
            expect((0, filefuncs_1.checkExt)("image")).toBeFalsy();
        });
    });
    describe("Test the fileExist function", function () {
        it("test the fileExist function with non-existing file", function () {
            expect((0, filefuncs_1.fileExist)("invalid path")).toBeFalsy();
        });
        it("test the fileExist function with existing file", function () {
            expect((0, filefuncs_1.fileExist)(file)).toBeTruthy();
        });
    });
});
