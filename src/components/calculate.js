
const OPERATIONS='*/+-'
const NUMBERS=/\d+(\s|[{OPERATIONS}])/
const opFunctions = {
    '*':(a, b) => {return a * b},
    '/':(a, b) => { let result = b!==0 ? a / b : alert('no dividing by 0')
                    return result 
                },
    '+':(a, b) => {return a + b},
    '-':(a, b) => {return a - b}
}

function calculate(s){
    console.log('Parsing String: ', s)
    console.log('String length = ', s.length)
    //parse string into array of digits and operators
    let calcArr=[];
    let current = ''
    for(let i = 0, char; i < s.length -1; i++){
        char = s.charAt(i);
        console.log('char = ', char)
        if (OPERATIONS.indexOf(char) > -1){
        	console.log('found an operator: ', char)
            if(current == '' && char == '-'){
            	console.log('found a negative')
                current = '-'
            } else{
                calcArr.push(new Decimal(current), char)
                current = '';
            } 
        } else{
        		console.log('found a digit or space', char)
            current = char == ' ' ? current: current += char
            console.log('new current: ', current)
        }
        console.log('calcArr = ', calcArr)
    }


    //iterate from front to back of operations (PEMDAS order)
    //if the current operator is found, reduce the digits on either side and operator to single digit

    //when array is down to a single value, return the value

    //if iteration stops and array length > 1 return error
}