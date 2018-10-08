"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { readFileSync } from 'fs';
// import * as path from 'path';
var App_1 = require("./App");
var routes_1 = require("./routes");
var db_1 = require("./database/db");
db_1.connectToDB().then(function (res) { return console.log(res); });
// query('show tables').then(res => console.log(res))
// query('select * from student_parent').then(res => console.log(res))
// const privateKey = readFileSync(path.join(__dirname, '../domain.key'));
// const certificate = readFileSync(path.join(__dirname, '../domain.crt'));
// const credentials = { key: privateKey, cert: certificate };
var app = new App_1.default( /* credentials */);
app.route(routes_1.default)
    .serve();
//# sourceMappingURL=index.js.map