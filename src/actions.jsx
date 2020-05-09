//Action creators for react/redux - JS Calc App
import { ADD, SUBTRACT, MULTIPLY, DIVIDE, EQUALS, CLEAR, DIGIT } from './constants'

function clickDigit(num){
    return{
        type: DIGIT,
        num: num
    }
}

function addNum(){
    return{
        type: ADD,
    }
}

function subNum(){
    return{
        type: SUBTRACT,
    }
}

function multNum(){
    return{
        type: MULTIPLY,
    }
}

function divideNum(){
    return{
        type: DIVIDE,
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


export { addNum, subNum, multNum, divideNum, equalIt, clearIt, clickDigit }