import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {clickOp} from '../actions'
import {OPERATORS} from '../constants'

function AddKey(props){
    return <button className='key' id='add' onClick={() => props.clickOp(props.value)}>+</button>
}

function SubKey(props){
    return <button className='key' id='sub' onClick={() => props.clickOp(props.value)}>-</button>
}

function MultKey(props){
    return <button className='key' id='mult' onClick={() => props.clickOp(props.value)}>*</button>
}

function DivideKey(props){
    return <button className='key' id='divide' onClick={() => props.clickOp(props.value)}>/</button>
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
               if (charPress.match(OPERATORS)){
                   dispatch(clickOp(charPress))
               } else console.log('no valid key found - keycode = ', event.keyCode)
        }
    }
}

export default connect(null, mapDispatchToProps)(OpsContainer);