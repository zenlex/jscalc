import Decimal from 'decimal.js'

const OPERATIONS=['*', '/', '+', '-']
const opFunctions = {
    '*':(a, b) => {return a.mul(b)},
    '/':(a, b) => {return b!==0 ? a.div(b) : alert('no dividing by 0')},
    '+':(a, b) => {return a.add(b)},
    '-':(a, b) => {return a.sub(b)}
}

export default function calculate(s){
    //parse string into array of digits and operators
    let calcArr=[];
    let current = ''
    let ops=OPERATIONS.join('')
    for(let i = 0, char; i < s.length; i++){
        char = s.charAt(i);
        if (ops.indexOf(char) > -1){
            if(current === '' && char === '-'){
                current = '-'
        } else if (current.endsWith('e')){
            //handle scientific notation
            current += char;
        } else{ 
                calcArr.push(new Decimal(current), char)
                current = '';
            } 
        } else{
            current = char === ' ' ? current : current += char
        }
    }
    //push the final value and move on to reduction
    if(current !== ''){
        calcArr.push(new Decimal(current))
    }

    //iterate from front to back of operations (PEMDAS order)
    let currentOp;
    for(let i = 0; i < OPERATIONS.length; i++){
        for(let j = 0; j < calcArr.length; j++){
            if(calcArr[j] === OPERATIONS[i]){
            //if the current operator is found, reduce the digits on either side and operator to single digit
                currentOp = opFunctions[OPERATIONS[i]]
                let insert = currentOp(calcArr[j-1], calcArr[j+1])
                calcArr.splice(j-1, 3, insert)
                j = j > 1 ? j - 2 : 0;
            }
        }
    } 
    
    //when array is down to a single value, return the value
    return calcArr.length > 1 ? 'ERR' : Number(calcArr[0]);
}