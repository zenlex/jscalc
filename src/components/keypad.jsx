import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {clickDigit, equalIt, clickOp, toggleKey, clearIt, bsIt} from '../actions'
import {OPERATORS, KEYCODES, SHIFTKEYCODES, opsIds} from '../constants'

const digitArr = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', '='];
const idArr = ['seven', 'eight', 'nine', 'four', 'five', 'six', 'one', 'two', 'three', 'zero', 'decimal', 'equals'];

function DigitKey(props){
    return <button className='key' id={props.id} tabIndex='-1' value={props.value} onClick={props.clickHandle}>{props.value}</button>
}

function OpsKey(props){
    return <button type='button' tabIndex='-1' className='key' id={opsIds[props.value]} onClick={() => props.clickOp(props.value)}>{props.value}</button>
}

function ClearKey(props){
    return <button className='key' id='clear' onClick={props.clickHandle}>C</button>
}

function BSKey(props){
    return <button className='key' id='bskey' onClick={props.clickHandle}>&#9003;</button>
}

const Keypad = props => {
    useEffect(() => {
        document.addEventListener('keydown', props.keyDownHandle)
        return(() => document.removeEventListener('keydown', props.keyDownHandle))
    }, [props.keyDownHandle] )
    
    let digGrid = digitArr.map((digObj, i, digitArr)=>{
        return(
            <DigitKey value={digitArr[i]} id={idArr[i]} clickHandle={props.digitClick} key={i} />
        )
    })
    let opsGrid = Object.entries(opsIds).map((opObj, i, opsArr) => {
        return(
            <OpsKey value={opsArr[i][0]} id={opsArr[i][1]} clickOp={props.clickOp} key={opsArr[i][1]} />
        ) 
    })
    return(
        <div id='keypad'>
            <div id='dig-grid'>
                {digGrid}
            </div>
            <div id='ops-keys'>
                {opsGrid}
            </div>
            <div id='clear-bs'>
                <ClearKey clickHandle={props.clearClick} />
                <BSKey clickHandle={props.bsClick} />
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        digitClick: event => {
            toggleKey(event.target.id)
            if(event.target.value==='='){
                dispatch(equalIt())
            }else{
                dispatch(clickDigit(event.target.value))
            }
        },
        clickOp: (value) => dispatch(clickOp(value)),
        clearClick: () => { dispatch(clearIt()) },
        bsClick: () => { dispatch(bsIt()) },
        keyDownHandle: event => {
            if(KEYCODES.has(event.keyCode)){
                let keyVal = event.shiftKey && SHIFTKEYCODES.has(event.keyCode) ? 
                    SHIFTKEYCODES.get(event.keyCode) :
                    KEYCODES.get(event.keyCode);
                    
                if(keyVal==='enter' || keyVal === '='){
                    event.preventDefault()
                    toggleKey('equals')
                    dispatch(equalIt())
                }
                if(keyVal === 'bs'){
                    event.preventDefault()
                    toggleKey('bskey')
                    dispatch(bsIt())
                }
                if(digitArr.includes(keyVal)){
                    toggleKey(idArr[digitArr.indexOf(keyVal)])
                    dispatch(clickDigit(keyVal))
                }
                if(keyVal.match(OPERATORS)){
                    toggleKey(opsIds[keyVal])
                    dispatch(clickOp(keyVal))
                } 
            }
        }
    }
}

export default connect(null, mapDispatchToProps)(Keypad);