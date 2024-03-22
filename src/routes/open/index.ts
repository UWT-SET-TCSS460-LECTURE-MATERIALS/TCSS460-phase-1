import express, { Router } from 'express';

import { helloRouter } from './hello';

const openRoutes: Router = express.Router();

openRoutes.use('/hello', helloRouter);

export { openRoutes };
