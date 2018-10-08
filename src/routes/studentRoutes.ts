import { Router } from 'express';
import { onlyPost } from '../controllers/controllerUtils';
import { getToken, getData, query } from '../controllers/defaultControllers';
import { studentIndex, educationHistory, parent, semCourseReg } from '../controllers/studentControllers';

const router = new Router();

router.get('/*', onlyPost);
router.post('/', studentIndex);
router.post('/education_history', educationHistory);
router.post('/parent', parent);
router.post('/sem_course_reg', semCourseReg);

export default router;