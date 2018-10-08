"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultRoutes_1 = require("./defaultRoutes");
var studentRoutes_1 = require("./studentRoutes");
exports.default = new Map([
    ['/', defaultRoutes_1.default],
    ['/student', studentRoutes_1.default]
]);
//# sourceMappingURL=index.js.map