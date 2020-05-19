import { Router } from 'express';
import * as controller from '../../../../controllers/mail';

const router = Router();

router
  .route('/')
    .post(controller.mail);

export default router;
