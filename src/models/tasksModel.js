//importando dados
import { connection } from "./connection.js";


//função que vai trazer toda a coleção
export const getAll = async () =>{
    //query realizada no DB
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};


//preenche os dados da tabela de maneira padrão
export const createTask = async (task) =>{
    //separa o title das tasks
    const {title} = task;
    //pega o timestamp e associa
    const dateUTC = new Date(Date.now()).toUTCString();
    //query realizada no DB
    const query = ('INSERT INTO tasks(title, status, createde_at) values(?, ?, ?)');
    //executa a query e adciona os dados
    const [createdTask] = await connection.execute(query, [title, 'pendente', dateUTC]); 
    //Retorna o id do registro inserido
    return {insertID: createdTask.insertId};
};


//deleta dados inteiros da tabela
export const deleteTask = async (id) => {
    //query realizada no DB
    const removedTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
    //executa a query
    return removedTask;
};


//atualiza os dados ja cadastratos, title e status
export const updateTask = async (id, task) => {
    //Extrai o título e o status da tarefa
    const {title, status} = task;
    //query realizada no DB
    const updatedTask = await connection.execute('UPDATE tasks SET title = ?, STATUS = ? WHERE id = ?', [title, status, id]);
    //executa a query
    return updatedTask;
};
