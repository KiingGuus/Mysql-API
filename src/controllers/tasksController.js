//configura os controladores, parametros passados e recebidos pelas API's


//importando dados
import { getAll, createTask, deleteTask, updateTask } from "../models/tasksModel.js";


//parametro que retorna todos os dados [get]
export const getAllc = async (req, res) =>{
    const tasks = await getAll();
    return res.status(200).json({tasks});
};


//parametro que cria dados [post]
export const createTaskc = async (req, res) =>{
    const createdTask = await createTask(req.body);
    return res.status(201).json(createdTask); 
};


//parametro que deleta dados na tabela [delete]
export const deleteTaskc = async (req, res) =>{
    const {id} = req.params;
    await deleteTask(id);
    return res.status(204).json();
};


//parametro que atualiza os dados ja cadastrados [put]
export const updateTaskc = async (req, res) =>{
    const {id} = req.params;
    await updateTask(id, req.body);
    return res.status(204).json();
};