//importando dados
import express from 'express';
import {router} from './router.js';

//utilizando o express
export const app = express();


//configurando para aceitar a estrutura json
app.use(express.json());


//configurando as rotas da aplicação
app.use(router);



