import { Router } from 'express';
import * as controller from '../../../../controllers/question-sets';

const router = Router();

router
  .route('/')
    .post(controller.create)
    .get(controller.get)
    .put(controller.update)
    .delete(controller.remove);

export default router;
