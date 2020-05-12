
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
                newNum = state.evaluated ? action.num : newNum + action.num
                let newFormula = state.evaluated ? '' : state.formula
                return Object.assign({}, state, {currNum: newNum, display: newNum, formula: newFormula, evaluated: false})
            } else{
                return state;
            } 
            
        case OPERAND:
            console.log('OPERAND triggered in calcReducer')
            console.log('Operand passed: ', action.op)
            let currNum = state.currNum;
            if(action.op === '-' && currNum === ''){
                return Object.assign({}, state, {currNum: '-', display: '-', evaluated: false})
            }
 
            let formula = (state.formula === '' && currNum === '') ? '0': state.formula;

            if (currNum !== ''){
                formula = formula + currNum + ' ' + action.op + ' ';
                return Object.assign({}, state, { formula: formula, currNum:'', display:'', evaluated: false})
            } else if (currNum === ''){
                let newFormula = formula.replace(OP_END, action.op + ' ')
                return Object.assign({}, state, { formula: newFormula, evaluated: false })
            } 
            break;

        case CLEAR:
            return Object.assign({}, state, {currNum:'', formula:'', display:'', evaluated: false})

        case EQUALS:
            let evalFormula = state.formula + state.currNum;
            //trim any trailing operators before eval (could move this to preparser in custom eval function later)
            while (evalFormula.match(OP_END)){
                evalFormula = evalFormula.slice(0, evalFormula.length-1)
            }            
            console.log('Evaluating Formula: ', evalFormula);
            let result = Math.round(1000000000000 * eval(evalFormula)) / 1000000000000;
            let resultDisplay = evalFormula + '=' + result.toString()
            console.log('Result = ', result)
            return Object.assign({}, state, {display: result.toString(), currNum: result.toString(), formula: resultDisplay, evaluated: true})
        
        default:
            return state;
    }
}

export default calcReducer

