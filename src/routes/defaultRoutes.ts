import { Router } from 'express';

import { defaultIndex, getToken, login, query } from '../controllers/defaultControllers'

const router = new Router();

router.get('/', defaultIndex);

router.post('/getToken', getToken);

router.post('/login', login);

router.post('/query', query);

export default router;