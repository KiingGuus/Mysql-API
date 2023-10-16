//importando dados
import {app} from './app.js';
import dotenv from 'dotenv';


//configurando dotenv para receber parametros externos e segurança dos dados
dotenv.config();


//configurando a porta passada pelo todenv
const PORT = process.env.PORT


//inicializando o servidor
app.listen(PORT, () =>{
    console.log(`Servidor iniciado na porta: ${PORT}`)
})