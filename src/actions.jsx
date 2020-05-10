//Action creators for react/redux - JS Calc App
import { OPERAND, EQUALS, CLEAR, DIGIT } from './constants'

function clickDigit(num){
    return{
        type: DIGIT,
        num: num
    }
}

function clickOp(operand){
    return{
        type: OPERAND,
        op: operand
    }
}

function equalIt(num){
    return{
        type: EQUALS,
        num: num
    }
}

function clearIt(){
    return{
        type: CLEAR
    }
}


export { clickOp, equalIt, clearIt, clickDigit }