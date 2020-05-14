import { Router } from 'express';
import * as controller from '../../../../controllers/admin';

const router = Router();
router
  .route('/')
    .post(controller.create)
    .get(controller.get)
    .put(controller.update)
    .delete(controller.remove);

export default router;
