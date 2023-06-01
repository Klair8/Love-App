
export const firstName= (data) =>{  
    return{
        type:'FIRSTNAME',
        payload:data
    }
}

export const secondName= (data) =>{  
    return{
        type:'SECONDNAME',
        payload:data
    }
}
export const showResult= (obj) =>{  
    return{
        type: 'RESULT',
        payload:obj
    }
}


