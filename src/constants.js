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
    currNumArr: ['8','0','0','8'],
    result: 0,
    history: '',
    display: 'DefaultDisplay',
    currOp: ''
}
export {DIGIT, ADD, SUBTRACT, MULTIPLY, DIVIDE, EQUALS, CLEAR, initState}