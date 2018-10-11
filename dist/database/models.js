"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    group: String,
    email: String,
    clientSecret: String,
    callback: String
});
exports.User = mongoose_1.model("User", exports.UserSchema);
//# sourceMappingURL=models.js.map