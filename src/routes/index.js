import { Router} from 'express';
import Login from './api/v1/login';
import Admin from './api/v1/admin';
import Candidates from './api/v1/candidates';
import Questions from './api/v1/questions';
import QuestionSets from './api/v1/question-sets';
import Mail from './api/v1/mail';

const mainRouter = Router();

mainRouter.use('/login', Login);
mainRouter.use('/candidate', Candidates);
mainRouter.use('/admin', Admin);
mainRouter.use('/question', Questions);
mainRouter.use('/questionset', QuestionSets);
mainRouter.use('/mail', Mail);

export default mainRouter;
