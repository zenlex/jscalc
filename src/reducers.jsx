
import { initState, DIGIT, CLEAR } from './constants'

function calcReducer(state = initState, action){
    switch(action.type){
        case DIGIT: 
            let newArr = state.currNumArr.slice();
            let valid = false;
            if(action.num === '0'){
                valid = newArr[0] !== '0' 
                || newArr === [] 
                || newArr.length > 2 ? true : false;
            } else if(action.num === '.'){
                if(newArr[0] === undefined){
                    newArr = ['0']
                    valid = true;
                }else{
                    valid = !newArr.includes('.')  
                }
            } else if(action.num.match(/[1-9]/)){
                valid = ((newArr[0] === '0' && newArr[1] === '.') || newArr[0] !== '0');
            } 
            
            if(valid){
                newArr.push(action.num)
                return Object.assign({}, state, {currNumArr: newArr})
            } else{
                return state;
            } 
            
        case CLEAR:
            return Object.assign({}, state, {currNumArr:[]})
        default:
            return state;
    }
}

export default calcReducer

