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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../database/models");
var crypto = require("crypto");
var jsonwebtoken_1 = require("jsonwebtoken");
var db_1 = require("../database/db");
var oauthPing = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send({ message: 'it works' });
        return [2 /*return*/];
    });
}); };
exports.oauthPing = oauthPing;
/**
 *
 * @param req has body which has cilentId, username and password
 * @param res will send callbackurl and token
 */
var oauthLogin = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var s, user, doc, token;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                s = "select Id from student where Student_Email=\"" + req.body.username + "\" and Student_Password=md5(\"" + req.body.password + "\")";
                console.log(s);
                return [4 /*yield*/, db_1.query(s)];
            case 1:
                user = _a.sent();
                console.log(user);
                return [4 /*yield*/, models_1.User.findById(req.body.clientId)];
            case 2:
                doc = _a.sent();
                // DONE create token using clientsecret + salt
                // TODO Put payload in token
                console.log(user[0]);
                token = jsonwebtoken_1.sign({
                    id: user[0].Id,
                }, doc.clientSecret, { expiresIn: 60 * 60 * 24 * 30 });
                res.send({
                    callbackurl: doc.callback,
                    token: token
                });
                return [2 /*return*/];
        }
    });
}); };
exports.oauthLogin = oauthLogin;
var getDetails = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var token, decoded, student, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                token = req.body.token;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                decoded = jsonwebtoken_1.verify(req.body.token, req.body.secret);
                return [4 /*yield*/, db_1.query("select * from student where Id=" + decoded.id)];
            case 2:
                student = _a.sent();
                res.send({ student: student });
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                res.send(e_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getDetails = getDetails;
var oauthCreate = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        user = new models_1.User({
            email: req.body.email,
            group: req.body.group,
            callback: req.body.callback
        });
        user.save().then(function (doc) {
            // console.log(doc);
            console.log(doc.id);
            models_1.User.findByIdAndUpdate(doc.id, { $set: { clientSecret: crypto.pbkdf2Sync(doc.id, doc.email, 1000, 64, "sha512").toString("hex") } }, { new: true }).then(function (doc) { return res.send(doc); }, function (err) { return res.send(err); });
        }, function (err) { return res.send(err); });
        return [2 /*return*/];
    });
}); };
exports.oauthCreate = oauthCreate;
//# sourceMappingURL=oauthControllers.js.map