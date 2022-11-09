import { Router } from 'express';
import { TimeoutError } from 'sequelize';

import * as todoController from '../controllers/todoController';

const router = Router();

router.get('/todo' , todoController.all);

router.post('/todo' , todoController.add);

router.put('/todo/:id' , todoController.update);

router.delete('/todo/:id' , todoController.remove)

export default router;