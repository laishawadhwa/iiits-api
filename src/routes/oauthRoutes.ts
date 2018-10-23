import { Router } from 'express';

import { oauthPing, oauthLogin, oauthCreate, getDetails, query } from '../controllers/oauthControllers';

const router = new Router();

router.get('/', oauthPing);

router.post('/login', oauthLogin);

router.post('/create', oauthCreate);

router.post('/getDetails', getDetails);

router.post('/query', query);
export default router;