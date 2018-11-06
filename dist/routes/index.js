"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultRoutes_1 = require("./defaultRoutes");
var oauthRoutes_1 = require("./oauthRoutes");
var courseRoutes_1 = require("./courseRoutes");
exports.default = new Map([
    ['/', defaultRoutes_1.default],
    ['/oauth', oauthRoutes_1.default],
    ['/course', courseRoutes_1.default]
]);
//# sourceMappingURL=index.js.map