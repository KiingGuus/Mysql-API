//esse documento trata as rotas das API's e trativas

//importando dados
import express from 'express';
import {getAllc, createTaskc, deleteTaskc, updateTaskc} from './controllers/tasksController.js';
import {validateBody, validateBodyStatus} from './middlewares/tasksMiddleware.js';


//exporta as rotas para o arquivo app.js
export const router = express.Router();


//rotas
router.get('/tasks', getAllc);
router.post('/tasks', validateBody, createTaskc);
router.delete('/tasks/:id', deleteTaskc);
router.put('/tasks/:id', validateBody, validateBodyStatus, updateTaskc);