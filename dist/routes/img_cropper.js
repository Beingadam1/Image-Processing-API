"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var filefuncs_1 = require("../utilities/filefuncs");
var cropper_1 = __importDefault(require("../utilities/cropper"));
var crop = express_1.default.Router();
var link = "http://localhost:4000/crop?filename=fjord&width=150&height=200";
crop.get("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, filename, width, height, imgDir, outputDir, targetImage, outputImage;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.query, filename = _a.filename, width = _a.width, height = _a.height;
                imgDir = path_1.default.resolve("./") + "/images/";
                outputDir = imgDir + "thumbnails/";
                targetImage = "" + imgDir + filename + ".jpg";
                if (Object.keys(req.query).length === 0) {
                    return [2 /*return*/, res.status(200).send("Welcome to Image manipulation API endpoint, Please fill up the url like this " + link)];
                }
                if (!filename || !width || !height || isNaN(Number(width)) || isNaN(Number(height))) {
                    return [2 /*return*/, res.status(400).send("Error, some parameters are missing")];
                }
                if ((0, filefuncs_1.checkExt)(String(filename))) {
                    return [2 /*return*/, res.status(400).send("Filename should not contain any extension")];
                }
                if (!(0, filefuncs_1.fileExist)(targetImage)) {
                    return [2 /*return*/, res.status(404).send("Image not found")];
                }
                if (!(0, filefuncs_1.fileExist)(outputDir)) {
                    (0, filefuncs_1.makeDir)(outputDir);
                }
                outputImage = outputDir + (filename + "-thumbnail-" + width + "x" + height + ".jpg");
                if (!(0, filefuncs_1.fileExist)(outputImage)) return [3 /*break*/, 1];
                res.sendFile(outputImage);
                return [3 /*break*/, 4];
            case 1: return [4 /*yield*/, (0, cropper_1.default)(targetImage, outputImage, Number(width), Number(height))];
            case 2:
                _b.sent();
                return [4 /*yield*/, res.sendFile(outputImage)];
            case 3:
                _b.sent();
                _b.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.default = crop;
