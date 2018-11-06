import { Router } from 'express';
import { onlyPost } from '../controllers/controllerUtils';
import { getToken, getData, query } from '../controllers/defaultControllers';
import { courseRead, courseCreate, courseUpdate, courseDelete } from '../controllers/courseControllers'

const router = new Router();

router.get('/*', onlyPost)
      .post('/read', courseRead)
      .post('/create', courseCreate)
      .post('/update', courseUpdate)
      .post('/delete', courseDelete)

export default router;
