import { Router } from 'express';
import { onlyPost } from '../controllers/controllerUtils';
import { getToken, getData, query } from '../controllers/defaultControllers';
import { studentIndex, educationHistory, parent, semCourseReg } from '../controllers/studentControllers';

const router = new Router();

router.get('/*', onlyPost)
      .post('/', studentIndex)
      .post('/education_history', educationHistory)
      .post('/parent', parent)
      .post('/sem_course_reg', semCourseReg);

export default router;