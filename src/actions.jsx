//Action creators for react/redux - JS Calc App
import { ADD, SUBTRACT, MULTIPLY, DIVIDE, EQUALS, CLEAR, DIGIT } from './constants'

function clickDigit(num){
    return{
        type: DIGIT,
        num: num
    }
}

function addNum(num){
    return{
        type: ADD,
        num: num
    }
}

function subNum(num){
    return{
        type: SUBTRACT,
        num: num
    }
}

function multNum(num){
    return{
        type: MULTIPLY,
        num: num
    }
}

function divNum(num){
    return{
        type: DIVIDE,
        num: num
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


export { addNum, subNum, multNum, divNum, equalIt, clearIt }