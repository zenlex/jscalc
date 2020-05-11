
import { initState, DIGIT, CLEAR, OPERAND, OP_END, OP_START } from './constants'

function calcReducer(state = initState, action){
    switch(action.type){
        case DIGIT: 
            let newNum = state.currNum;
            let valid = false;
            if(action.num === '0'){
                valid = newNum[0] !== '0' 
                || newNum === '' 
                || newNum.length > 2 ? true : false;
            } else if(action.num === '.'){
                if(newNum === ''){
                    newNum = '0'
                    valid = true;
                }else{
                    valid = !newNum.includes('.')  
                }
            } else if(action.num.match(/[1-9]/)){
                valid = (newNum === '0.' || newNum[0] !== '0');
            } 
            
            if(valid){
                newNum += action.num
                return Object.assign({}, state, {currNum: newNum, display: newNum})
            } else{
                return state;
            } 
            
        case OPERAND:
            console.log('OPERAND triggered in calcReducer')
            console.log('Operand passed: ', action.op)
            let currNum = state.currNum
            if (currNum === '-'){
                return Object.assign({}, state, { currNum: currNum, display: currNum})
            } else {
                let newFormula = state.formula + currNum + action.op;
                return Object.assign({}, state, { formula: newFormula, currNum:'', display:''})
            }

        
        case CLEAR:
            return Object.assign({}, state, {currNum:'', formula:'', display:''})

        default:
            return state;
    }
}

export default calcReducer

