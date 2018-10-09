import { Router } from 'express';

import { oauthPing, oauthLogin } from '../controllers/oauthControllers';

const router = new Router();

router.get('/', oauthPing);

router.post('/login', oauthLogin);


export default router;