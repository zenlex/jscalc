import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {clickOp} from '../actions'
import {OPERATORS} from '../constants'

function AddKey(props){
    return <button type='button' tabIndex='-1' className='key' id='add' onClick={() => props.clickOp(props.value)}>+</button>
}

function SubKey(props){
    return <button type='button' tabIndex='-1' className='key' id='sub' onClick={() => props.clickOp(props.value)}>-</button>
}

function MultKey(props){
    return <button type='button' tabIndex='-1' className='key' id='mult' onClick={() => props.clickOp(props.value)}>*</button>
}

function DivideKey(props){
    return <button type='button' tabIndex='-1' className='key' id='divide' onClick={() => props.clickOp(props.value)}>/</button>
}

function InvSign(props){
    return <button type='button' tabIndex='-1' className='key' id='invert' onClick={() => props.clickOp(props.value)}>+/-</button>
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
        <InvSign clickOp={props.clickOp} value='invert'/>             
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
                    dispatch(clickOp(charPress))
                } 
        }
    }
}

export default connect(null, mapDispatchToProps)(OpsContainer);