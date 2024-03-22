import express, { Router } from 'express';

import { openRoutes } from './open';

const routes: Router = express.Router();

routes.use(openRoutes);

export { routes };
