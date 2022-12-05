const express = require('express');
import { UserRoutes } from './routes';


const router = express.Router();


UserRoutes.forEach(route => {
    router[route.method](route.path, route.action)
}) 


export { router as userRouter} 