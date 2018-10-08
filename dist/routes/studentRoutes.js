"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllerUtils_1 = require("../controllers/controllerUtils");
var studentControllers_1 = require("../controllers/studentControllers");
var router = new express_1.Router();
router.get('/*', controllerUtils_1.onlyPost);
router.post('/', studentControllers_1.studentIndex);
router.post('/education_history', studentControllers_1.educationHistory);
router.post('/parent', studentControllers_1.parent);
router.post('/sem_course_reg', studentControllers_1.semCourseReg);
exports.default = router;
//# sourceMappingURL=studentRoutes.js.map