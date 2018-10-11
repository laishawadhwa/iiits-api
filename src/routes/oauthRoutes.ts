import { Router } from 'express';

import { oauthPing, oauthLogin, oauthCreate } from '../controllers/oauthControllers';

const router = new Router();

router.get('/', oauthPing);

router.post('/login', oauthLogin);

router.post('/create', oauthCreate);



export default router;