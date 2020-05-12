//Constants for declaration throughout JSCalc App
const OPERAND = 'OPERAND';
const EQUALS = 'EQUALS';
const CLEAR = 'CLEAR';
const DIGIT = 'DIGIT';

const OPERATORS = /[+\-*/]/
const OP_END = /[+\-*/]$/
const OP_START = /^[+\-*]/
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
    currNum: '',
    formula: '',
    display: '',
    evaluated: false
}

export {DIGIT, OPERAND, OPERATORS, OP_END, OP_START, EQUALS, CLEAR, KEYCODES, initState}