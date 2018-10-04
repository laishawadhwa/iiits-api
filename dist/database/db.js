"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
// import { resolve } from 'path';
var con = mysql.createConnection({
    host: "us-cdbr-iron-east-01.cleardb.net",
    user: "b73de7b8cfffd5",
    password: "ca0b7d3f",
    database: "heroku_c9028d96deb4c64"
});
var connectToDB = function () {
    return new Promise(function (resolve, reject) {
        con.connect(function (err) {
            if (err)
                reject(err);
            resolve('Successfully connected to DB');
        });
    });
};
exports.connectToDB = connectToDB;
var query = function (query) {
    var con1 = mysql.createConnection({
        host: "us-cdbr-iron-east-01.cleardb.net",
        user: "b73de7b8cfffd5",
        password: "ca0b7d3f",
        database: "heroku_c9028d96deb4c64"
    });
    return new Promise(function (resolve, reject) {
        con1.connect(function (err) {
            if (err)
                reject(err);
            con1.query(query, function (err, result) {
                if (err)
                    reject(err);
                con1.end();
                resolve(result);
            });
        });
    });
};
exports.query = query;
var createDB = function (dbname) {
    return new Promise(function (resolve, reject) {
        var con2 = mysql.createConnection({
            host: "localhost",
            user: "root",
        });
    });
};
exports.createDB = createDB;
//# sourceMappingURL=db.js.map