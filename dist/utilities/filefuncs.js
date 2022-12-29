"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDir = exports.fileExist = exports.checkExt = void 0;
var fs_1 = require("fs");
// make/create a directory
var makeDir = function (dirLocation) {
    return (0, fs_1.mkdirSync)(dirLocation);
};
exports.makeDir = makeDir;
// synchronously check for file existence
var checkExt = function (fileName) {
    return fileName.includes(".jpg" || ".png" || ".gif" || ".jpeg");
};
exports.checkExt = checkExt;
// check if the file have an extension
var fileExist = function (imageLocation) {
    return (0, fs_1.existsSync)(imageLocation);
};
exports.fileExist = fileExist;
