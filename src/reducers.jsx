
import { initState, DIGIT, CLEAR, ADD, SUBTRACT, MULTIPLY, DIVIDE } from './constants'

function calcReducer(state = initState, action){
    switch(action.type){
        case DIGIT: 
            let newArr = state.currNumArr.slice();
            let valid = false;
            if(action.num === '0'){
                valid = newArr[0] !== '0' 
                || newArr === [] 
                || newArr.length > 2 ? true : false;
            } else if(action.num === '.'){
                if(newArr[0] === undefined){
                    newArr = ['0']
                    valid = true;
                }else{
                    valid = !newArr.includes('.')  
                }
            } else if(action.num.match(/[1-9]/)){
                valid = ((newArr[0] === '0' && newArr[1] === '.') || newArr[0] !== '0');
            } 
            
            if(valid){
                newArr.push(action.num)
                return Object.assign({}, state, {currNumArr: newArr})
            } else{
                return state;
            } 
            
        case CLEAR:
            return Object.assign({}, state, {currNumArr:[]})

        case ADD:
            console.log('ADD triggered in calcReducer')
            let currNum = Number(state.currNumArr.join(''))
            console.log('currNum = ', currNum)
            return Object.assign({}, state, {prevNum: state.prevNum+currNum, currNumArr:['0']})
        
        case SUBTRACT:
            console.log('SUBTRACT triggered in calcReducer')
            return state;
        
        case MULTIPLY:
            console.log('MULTIPLY triggered in calcReducer')
            return state;

        case DIVIDE:
            console.log('DIVIDE triggered in calcReducer')
            return state;

        default:
            return state;
    }
}

export default calcReducer

