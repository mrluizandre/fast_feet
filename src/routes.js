import { Router } from 'express';

import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';
import RecipientController from './app/controller/RecipientController';

import authMiddleware from './app/middlewares/auth';
import loggerMiddleware from './app/middlewares/logger';

const routes = new Router();

routes.use(loggerMiddleware);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.post('/users', UserController.store);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients', RecipientController.update);

export default routes;
