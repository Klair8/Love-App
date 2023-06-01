
const initialState ={
        firstname : "",
        secondname :"",
        percentage:"",
        result:""  
}


export const reducer = (state= initialState,action={}) =>{
switch (action.type){
    case 'FIRSTNAME':
        return {...state, 
            firstname :action.payload}

    case 'SECONDNAME':
    return {...state, 
        secondname:action.payload}

    case 'RESULT':
    return{...state,
        percentage:action.payload.percentage,
        result:action.payload.result}
        
    default:
    return { ...state}   
}    
}