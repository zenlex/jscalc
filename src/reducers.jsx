
import { initState, DIGIT, CLEAR, OPERAND, OP_END, EQUALS } from './constants'

function calcReducer(state = initState, action){
    switch(action.type){
        case DIGIT: 
            let newNum = state.currNum;
            let valid = false;
            //evaluate 0 cases
            if(action.num === '0'){
                valid = newNum[0] !== '0' 
            }
            //evaluate decimal cases
            if(action.num === '.'){
                valid = !state.currNum.includes('.')
                if(valid){
                    console.log('no decimal found in currNum valid = ', valid)
                } else console.log('decimal already found in currNum, valid = ', valid)
            }
            //evaluate digits
            if(action.num.match(/[1-9]/)){
                //strip a leading zero on first digit entry
                newNum = newNum === '0' ? '' : newNum
                valid = true;
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
            let currNum = state.currNum;
            let formula = (state.formula === '' && currNum === '') ? '0': state.formula;
            if(state.evaluated === true){
                formula = ''
            }
            if(action.op === '-' && currNum === ''){
                return Object.assign({}, state, {currNum: '-', display: '-', evaluated: false})
            }
 
            if (currNum !== '' && currNum !== '-'){
                formula = formula + currNum + ' ' + action.op + ' ';
                return Object.assign({}, state, { formula: formula, currNum:'', display:'', evaluated: false})
            } else {
                let newFormula = formula.replace(OP_END, action.op + ' ')
                return Object.assign({}, state, { formula: newFormula, currNum:'', evaluated: false })
            } 

        case CLEAR:
            return Object.assign({}, state, {currNum:'', formula:'', display:'0', evaluated: false})

        case EQUALS:
            let evalFormula = state.formula + state.currNum;
            //trim any trailing operators before eval (could move this to preparser in custom eval function later)
            while (evalFormula.match(OP_END)){
                evalFormula = evalFormula.slice(0, -1)
            }            
            let result = Math.round(1000000000000 * eval(evalFormula)) / 1000000000000;
            let resultDisplay = evalFormula + '=' + result.toString()
            return Object.assign({}, state, {display: result, currNum: result.toString(), formula: resultDisplay, evaluated: true})
        
        default:
            return state;
    }
}

export default calcReducer

