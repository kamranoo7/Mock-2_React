import { SET_CATEGORY, SET_DIFFICULTY_LEVEL, SET_NAME, SET_NO_OF_QUESTION } from "./actionType"

export let setName=(name)=>{
    return {
        type:SET_NAME,
        payload:name
    }
}
export let setCategory=(category)=>{
    return {
        type:SET_CATEGORY,
      payload:category
    }
}
export let setDifficultyLevel=(difficulty)=>{
    return {
        type:SET_DIFFICULTY_LEVEL,
        payload:difficulty
    }
}
export let setNoOfQuestion=(numQuestion)=>{
    return {
        type:SET_NO_OF_QUESTION,
        payload:numQuestion
    }
}