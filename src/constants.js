//Constants for declaration throughout JSCalc App
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const MULTIPLY = 'MULTIPLY';
const DIVIDE = 'DIVIDE';
const EQUALS = 'EQUALS';
const CLEAR = 'CLEAR';
const DIGIT = 'DIGIT';

const initState = {
    prevNum: 0,
    currNumArr: [],
    result: 0,
    history: '',
    display: '',
    currOp: ''
}
export {DIGIT, ADD, SUBTRACT, MULTIPLY, DIVIDE, EQUALS, CLEAR, initState}