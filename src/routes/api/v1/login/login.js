import { Router } from 'express';
import * as controller from '../../../../controllers/login';

const router = Router();

router
  .route('/')
    .post(controller.login);

export default router;
