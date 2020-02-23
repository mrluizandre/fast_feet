import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';
import RecipientController from './app/controller/RecipientController';
import FileController from './app/controller/FileController';

import authMiddleware from './app/middlewares/auth';
import loggerMiddleware from './app/middlewares/logger';

const routes = new Router();
const upload = multer(multerConfig);

routes.use(loggerMiddleware);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.post('/files', upload.single('file'), FileController.store);
routes.post('/users', UserController.store);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);

export default routes;
