"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { readFileSync } from 'fs';
// import * as path from 'path';
var App_1 = require("./App");
var routes_1 = require("./routes");
// const privateKey = readFileSync(path.join(__dirname, '../domain.key'));
// const certificate = readFileSync(path.join(__dirname, '../domain.crt'));
// const credentials = { key: privateKey, cert: certificate };
var app = new App_1.default( /* credentials */);
app.route(routes_1.default)
    .serve();
//# sourceMappingURL=index.js.map