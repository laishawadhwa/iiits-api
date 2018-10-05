import { Router } from 'express';

import { defaultIndex, getToken, getData, query } from '../controllers/defaultControllers'

const router = new Router();

router.get('/', defaultIndex);

router.post('/getToken', getToken);

router.post('/getData', getData);

router.post('/query', query);

export default router;