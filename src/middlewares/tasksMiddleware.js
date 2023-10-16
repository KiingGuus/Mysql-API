//aqui são os validadores
//dados passados pelo front sao validos nessa camada


//valida o title
export const validateBody = (req, res, next) =>{
    //isola o body
    const {body} = req;
    //condicional para caso o campo seja definido de maneira errada
    if(body.title === undefined){
        return res.status(400).json({message: 'the fild title is required'})
    }
    //condicional para caso o valor nao seja definido
    if(body.title === ''){
        return res.status(400).json({message: 'title cannot be empty'})
    }
    //caso esteja tudo ok, ira startar a aplicação
    next();
};


//valida o status
export const validateBodyStatus = (req, res, next) =>{
    //isola o body
    const {body} = req;
    //condicional para caso o campo seja definido de maneira errada
    if(body.status === undefined){
        return res.status(400).json({eessage: 'the fild status is required'})
    }
    //condicional para caso o valor nao seja definido
    if(body.status === ''){
        return res.status(400).json({message: 'title status be empty'})
    }
    //caso esteja tudo ok, ira startar a aplicação
    next();
};

