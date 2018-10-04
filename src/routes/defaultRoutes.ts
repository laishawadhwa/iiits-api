import { Router } from 'express';

import { defaultIndex, getToken, login } from '../controllers/defaultControllers'

const router = new Router();

router.get('/', defaultIndex);

router.post('/getToken', getToken);

router.post('/login', login);

export default router;