//Constants for declaration throughout JSCalc App
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const MULTIPLY = 'MULTIPLY';
const DIVIDE = 'DIVIDE';
const EQUALS = 'EQUALS';
const CLEAR = 'CLEAR';
const DIGIT = 'DIGIT';

const KEYCODES = {
    '0': 48,
    '1': 49,
    '2': 50,
    '3': 51,
    '4': 52,
    '5': 53,
    '6': 54,
    '7': 55,
    '8': 56,
    '9': 57,
    '.': 46,
    '+': 43,
    '-': 45,
    '*': 42,
    '/': 47,
    'enter': 13
}

const initState = {
    prevNum: 0,
    currNumArr: [],
    result: 0,
    formula: '',
    display: 'DefaultDisplay',
    currOp: ''
}

export {DIGIT, ADD, SUBTRACT, MULTIPLY, DIVIDE, EQUALS, CLEAR, KEYCODES, initState}