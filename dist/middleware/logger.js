"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, res, next) {
    // eslint-disable-next-line no-console
    console.log("User visted ".concat(req.url, "."));
    next();
};
exports.default = logger;
