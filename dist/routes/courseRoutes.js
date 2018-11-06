"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllerUtils_1 = require("../controllers/controllerUtils");
var courseControllers_1 = require("../controllers/courseControllers");
var router = new express_1.Router();
router.get('/*', controllerUtils_1.onlyPost)
    .post('/read', courseControllers_1.courseRead)
    .post('/create', courseControllers_1.courseCreate)
    .post('/update', courseControllers_1.courseUpdate)
    .post('/delete', courseControllers_1.courseDelete);
exports.default = router;
//# sourceMappingURL=courseRoutes.js.map