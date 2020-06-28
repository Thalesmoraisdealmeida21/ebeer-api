import { Router } from 'express';

const routes = Router();

import pubsRouter from './pubs.routes';


  routes.use('/pubs', pubsRouter);




export default routes;
