"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
var db_1 = require("../database/db");
var defaultIndex = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send({ message: 'it works' });
        return [2 /*return*/];
    });
}); };
exports.defaultIndex = defaultIndex;
var getToken = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        /**
         * TODO DB queries. Smaple Code Below
         */
        // User.find({
        //   username: req.body.username
        // }).then(
        //   (docs) => {
        //       if (docs.length && docs[0].password === req.body.password) {
        // res.send({
        //     'x-auth': signToken({
        //         id: docs[0].id,
        //     }, 'adgjmptw')
        //           });
        //       } else {
        //           res.status(401).send("User not present");
        //       }
        // },
        // (err) => {
        // res.status(500).send("Server not responding");
        // }
        // );
        res.send({
            message: 'Data not present'
        });
        return [2 /*return*/];
    });
}); };
exports.getToken = getToken;
var getData = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var e_1, _a, _b, _c, i, decoded, decoded_1;
    return __generator(this, function (_d) {
        /**
         * TODO DB queries. Smaple Code Below
         */
        console.log(req.body.scope);
        try {
            for (_b = __values(req.body.scope), _c = _b.next(); !_c.done; _c = _b.next()) {
                i = _c.value;
                console.log(i);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            decoded_1 = jsonwebtoken_1.verify(req.headers['x-auth'], 'adgjmptw');
            // User.findById(decoded.id).then(
            //     (doc) => {
            //         res.send({
            //             subs: doc.submissions
            //         })
            //     },
            //     err => {}
            // )
            res.send('successfully decoded');
        }
        catch (e) {
            res.status(401).send({
                error: "Unauthorized"
            });
        }
        return [2 /*return*/];
    });
}); };
exports.getData = getData;
var query = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        console.log(req.body.query);
        db_1.query(req.body.query).then(function (docs) {
            res.send(docs);
        }, function (err) {
            res.send(err);
        });
        return [2 /*return*/];
    });
}); };
exports.query = query;
//# sourceMappingURL=defaultControllers.js.map