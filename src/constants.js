//Constants for declaration throughout JSCalc App
const OPERAND = 'OPERAND';
const EQUALS = 'EQUALS';
const CLEAR = 'CLEAR';
const DIGIT = 'DIGIT';
const BS = 'BACKSPACE';

const OPERATORS = /[+\-*/]/
const OP_END = /[+\-*/]\s?$/
const OP_START = /^[+\-*]/
const KEYCODES = new Map([
    [96, '0'],
    [48, '0'],
    [97, '1'],
    [49, '1'],
    [98, '2'],
    [50, '2'],
    [99, '3'],
    [51, '3'],
    [100, '4'],
    [52,'4'],
    [101, '5'],
    [53, '5'],
    [102, '6'],
    [54, '6'],
    [103, '7'],
    [55, '7'],
    [104, '8'],
    [56, '8'],
    [105, '9'],
    [57, '9'],
    [190, '.'],
    [110, '.'],
    [187, '='],
    [107, '+'],
    [189, '-'],
    [109, '-'],
    [106, '*'],
    [191, '/'],
    [111, '/'],
    [13, 'enter'],
    [8, 'bs'],
    [46, 'bs']
])

const SHIFTKEYCODES = new Map([
    [56, '*'],
    [187, '+']
])

const opsIds={
    '+':'add',
    '-':'sub',
    '*':'multiply',
    '/':'divide'
}

const initState = {
    currNum: '0',
    formula: '',
    display: '0',
    evaluated: false
}

export {DIGIT, OPERAND, OPERATORS, OP_END, OP_START, EQUALS, CLEAR, KEYCODES, SHIFTKEYCODES, BS, initState, opsIds}