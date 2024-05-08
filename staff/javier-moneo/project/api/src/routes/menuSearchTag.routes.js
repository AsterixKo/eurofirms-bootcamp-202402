import { Router } from 'express';
import * as menuSearchTagCtrl from '../controllers/menuSearchTag.controller.js';
import { authJwt } from '../middlewares/index.js';

const router = Router();

router.get('/:editionId', menuSearchTagCtrl.getMenuSearchTagsByEditionId);

export default router;