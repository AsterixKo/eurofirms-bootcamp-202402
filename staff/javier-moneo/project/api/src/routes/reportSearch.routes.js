import { Router } from 'express';
import * as reportSearchesCtrl from '../controllers/reportSearch.controller.js';
import { authJwt } from '../middlewares/index.js';

const router = Router();

router.post(
  '/',
  [authJwt.verifyToken, authJwt.isUserBanned],
  reportSearchesCtrl.createReport
);

export default router;