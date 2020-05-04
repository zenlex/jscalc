
import {initState, DIGIT} from './constants'

function digitReducer(state = initState, action){
    switch(action.type){
        case DIGIT: 
            console.log('Digit Action Called in digitReducer')
            break;
        default:
            return state;
    }
}

function operationReducer(state = initState, action){
    switch(action.type){

        default:
            return state;
    }
}

export { digitReducer, operationReducer }

