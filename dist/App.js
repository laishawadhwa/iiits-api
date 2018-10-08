"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var App = /** @class */ (function () {
    /**
     * App constructor
     * @param {string} name
     */
    function App(/* credentials: ServerOptions, */ name) {
        if (name === void 0) { name = 'Alma Matters'; }
        this.port = Number(process.env.PORT) || 3000;
        this.app = express();
        this.app.use(bodyParser.json({ parameterLimit: 1000000, limit: '50mb', extended: true }));
        this.app.use(bodyParser.urlencoded({ parameterLimit: 1000000, limit: '50mb', extended: true }));
        this.app.use(cors());
        // this.https = httpsServer(credentials, this.app);
        this.http = http_1.createServer(this.app);
        this.app.set('name', name);
    }
    /**
     * Init http-listener
     * @returns {this}
     */
    App.prototype.serve = function () {
        var _this = this;
        this.http.listen(this.port, function (_) { return console.log("@ http://localhost:" + _this.port); });
        // this.https.listen(this.sPort, _ => console.log(`@ https://localhost:${this.sPort}`));
        return this;
        // return this.app.listen(this.port, _ => console.log(`server started on http://127.0.0.1:${this.port}`));
    };
    App.prototype.route = function (urls) {
        var _this = this;
        urls.forEach(function (cb, path) { return _this.app.use(path, cb); });
        return this;
    };
    return App;
}());
exports.default = App;
//# sourceMappingURL=App.js.map