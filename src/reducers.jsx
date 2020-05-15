
import { initState, DIGIT, CLEAR, OPERAND, OP_END, EQUALS, BS } from './constants'
import calculate from './components/calculate.js'

function calcReducer(state = initState, action){
    switch(action.type){
        case DIGIT: 
            let newNum = state.currNum;
            if(newNum.length > 21){
               return state;
            }
            let valid = false;
            //evaluate 0 cases
            if(action.num === '0'){
                valid = newNum[0] !== '0' 
            }
            //evaluate decimal cases
            if(action.num === '.'){
               if(newNum === ''){
                   return Object.assign({}, state, {currNum:'0.', display:'0.'})
               }else {
                    valid = !state.currNum.includes('.')
               }
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
        case BS:
            if(state.evaluated === true){
                return initState;
            }
            if(state.currNum.length > 1){
                let newNum = state.currNum.slice(0, -1) 
                return Object.assign({}, state, {currNum: newNum, display: newNum})
            }
            if(state.currNum.length === 1){
                return Object.assign({}, state, {display:'', currNum:''})
            }
            if(state.formula.length > 0 && state.currNum.length === 0){
                let newFormula = state.formula
                if (newFormula.match(OP_END) || newFormula.endsWith(' ')){
                   do{
                        newFormula = newFormula.slice(0, -1)
                    } while(newFormula.match(OP_END) || newFormula.endsWith(' '))
                }else newFormula = state.formula.slice(0,-1)
                return Object.assign({}, state, {formula: newFormula})
            }else return state;

        case CLEAR:
            return Object.assign({}, state, {currNum:'', formula:'', display:'0', evaluated: false})

        case EQUALS:
            if(state.evaluated === true){
                return state;
            }
            let evalFormula = state.formula + state.currNum;
            //trim any trailing operators before eval (could move this to preparser in custom eval function later)
            while (evalFormula.match(OP_END)){
                evalFormula = evalFormula.slice(0, -1)
            }            
            let result = 0;
            if(evalFormula.length > 0){
                result = calculate(evalFormula)
            }
            if(result === 'ERR'){
                setTimeout(()=>alert("ERROR - Could Not Calculate"), 1500)
                return state;
            }
            let resultDisplay = evalFormula + '=' + result.toString()
            return Object.assign({}, state, {display: result, currNum: result.toString(), formula: resultDisplay, evaluated: true})
        
        default:
            return state;
    }
}

export default calcReducer

