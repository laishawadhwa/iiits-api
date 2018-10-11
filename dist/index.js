"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { readFileSync } from 'fs';
// import * as path from 'path';
var App_1 = require("./App");
var routes_1 = require("./routes");
var mongoose_1 = require("mongoose");
// const privateKey = readFileSync(path.join(__dirname, '../domain.key'));
// const certificate = readFileSync(path.join(__dirname, '../domain.crt'));
// const credentials = { key: privateKey, cert: certificate };
mongoose_1.connect('mongodb://srijanreddy98:hackthecode18@ds161112.mlab.com:61112/techfesia2018hackthecode', { useNewUrlParser: true });
var app = new App_1.default( /* credentials */);
app.route(routes_1.default)
    .serve();
//# sourceMappingURL=index.js.map