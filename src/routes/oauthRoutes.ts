import { Router } from 'express';

import { oauthPing, oauthLogin, oauthCreate, getDetails } from '../controllers/oauthControllers';

const router = new Router();

router.get('/', oauthPing);

router.post('/login', oauthLogin);

router.post('/create', oauthCreate);

router.post('/getDetails', getDetails);

export default router;