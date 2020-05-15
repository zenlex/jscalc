import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {clickOp, toggleKey} from '../actions'
import {OPERATORS} from '../constants'

const opsIds={
    '+':'add',
    '-':'sub',
    '*':'multiply',
    '/':'divide'
}

function AddKey(props){
    return <button type='button' tabIndex='-1' className='key' id={opsIds[props.value]} onClick={() => props.clickOp(props.value)}>+</button>
}

function SubKey(props){
    return <button type='button' tabIndex='-1' className='key' id={opsIds[props.value]} onClick={() => props.clickOp(props.value)}>-</button>
}

function MultKey(props){
    return <button type='button' tabIndex='-1' className='key' id={opsIds[props.value]} onClick={() => props.clickOp(props.value)}>*</button>
}

function DivideKey(props){
    return <button type='button' tabIndex='-1' className='key' id={opsIds[props.value]} onClick={() => props.clickOp(props.value)}>/</button>
}

function OpsContainer(props){

    useEffect(() => {
        document.addEventListener('keypress', props.keyPressHandle)
        return (() => document.removeEventListener('keypress', props.keyPressHandle))
    }, [props.keyPressHandle] )
    
    return(
        <div id='ops-keys'>
        <AddKey clickOp={props.clickOp} value='+'/>
        <SubKey clickOp={props.clickOp} value='-'/>
        <MultKey clickOp={props.clickOp} value='*' />
        <DivideKey clickOp={props.clickOp} value='/'/> 
        </div>
    )
}



function mapDispatchToProps(dispatch){
    return{
        clickOp: (value) => dispatch(clickOp(value)),
        keyPressHandle: event => {
            let charPress = String.fromCharCode(event.keyCode)
                if (event.keyCode===13){
                    event.preventDefault()
                }   
            
                if (charPress.match(OPERATORS)){
                    toggleKey(opsIds[charPress])
                    dispatch(clickOp(charPress))
                } 
        }
    }
}

export default connect(null, mapDispatchToProps)(OpsContainer);