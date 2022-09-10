function verificarUsuario(nome, senha, callback){
    dataBase.verifyUser(nome, senha, (error, infoUsuario)=>{
        if(error){
            callback(error)
        }else{
            dataBase.getRoles(nome, (error, roles) =>{
                if(error){
                    callback(error)
                }else{
                    dataBase.logAccess(userName, (error)=>{
                        if(error){
                            callback(error)
                            
                            }else{
                                callback(null, infoUsuario, roles)
                            }
                        }
                    )
                }
            })
        }
    })
}