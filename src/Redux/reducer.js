import { SET_CATEGORY, SET_DIFFICULTY_LEVEL, SET_NAME, SET_NO_OF_QUESTION } from "./actionType"



let initialState={
    name:"",
    category:"",
    difficulty:"",
    numQuestions:"",

}

 export let reducer=(state=initialState,action)=>{
    switch(action.type){
case SET_NAME:
    return {...state,name:action.payload}
    case SET_CATEGORY:
        return {...state,category:action.payload}
        case SET_DIFFICULTY_LEVEL:
            return {...state,difficulty:action.payload}
            case SET_NO_OF_QUESTION:
                return {...state, numQuestions:action.payload}
                default:
                    return state
    }
}
