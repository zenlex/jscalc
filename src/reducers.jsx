
import { initState, DIGIT, CLEAR, OPERAND, OP_END, EQUALS } from './constants'

function calcReducer(state = initState, action){
    switch(action.type){
        case DIGIT: 
            let newNum = state.currNum;
            let valid = false;
            //evaluate 0 cases
            if(action.num === '0'){
                valid = newNum[0] !== '0' 
                || newNum === '' 
                || newNum.length > 2 ? true : false;
            }
            //evaluate decimal cases
            if(action.num === '.'){
                if(newNum === '' || '-'){
                    newNum += '0'
                    valid = true;
                } else{
                valid = !newNum.includes('.')  
                }
            }
            //evaluate digits
            if(action.num.match(/[1-9]/)){
                valid = (newNum === '0.' || newNum[0] !== '0');
            } 
            //if valid entry push newNum and update display
            if(valid){
                newNum += action.num
                return Object.assign({}, state, {currNum: newNum, display: newNum})
            } else{
                return state;
            } 
            
        case OPERAND:
            console.log('OPERAND triggered in calcReducer')
            console.log('Operand passed: ', action.op)
            let currNum = state.currNum;
            if(state.formula === '' && currNum === ''){
                return Object.assign({}, state, {formula: '0' + action.op})
            }
            let formula = state.formula === '' ? '0': state.formula;
            if (currNum !== '' && action.op !== 'invert'){
                formula = state.formula + currNum + action.op;
                return Object.assign({}, state, { formula: formula, currNum:'', display:''})
            }
            if (currNum === '' && formula !== ''){
                let newFormula = formula.replace(OP_END, action.op)
                return Object.assign({}, state, { formula: newFormula })
            } 
            if (action.op === 'invert'){
                currNum = currNum.charAt(0) === '-' ? currNum.slice(1) : '-' + currNum
                return Object.assign({}, state, {currNum: currNum, display: currNum})
            }
            break;

        case CLEAR:
            return Object.assign({}, state, {currNum:'', formula:'', display:''})

        case EQUALS:
            let evalFormula = state.formula + state.currNum;
            if (evalFormula.match(OP_END)){
                evalFormula = evalFormula.slice(0, evalFormula.length-2)
            }            
            console.log('Evaluating Formula: ', evalFormula);
            let result = Math.round(1000000000000 * eval(evalFormula)) / 1000000000000;
            console.log('Result = ', result)
            return Object.assign({}, state, {display: result.toString(), currNum: result.toString(), formula: ''})
        
        default:
            return state;
    }
}

export default calcReducer

