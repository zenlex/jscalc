import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {addNum, subNum, multNum, divideNum} from '../actions'

function AddKey(props){
    return <button className='key' id='add' onClick={props.clickHandle}>+</button>
}

function SubKey(props){
    return <button className='key' id='sub' onClick={props.clickHandle}>-</button>
}

function MultKey(props){
    return <button className='key' id='mult' onClick={props.clickHandle}>*</button>
}

function DivideKey(props){
    return <button className='key' id='divide' onClick={props.clickHandle}>/</button>
}

function OpsContainer(props){

    useEffect(() => {
        document.addEventListener('keypress', props.keyPressHandle)
        return (() => document.removeEventListener('keypress', props.keyPressHandle))
    }, [props.keyPressHandle] )
    
    return(
        <div id='ops-keys'>
        <AddKey clickHandle={props.addClick} />
        <SubKey clickHandle={props.subClick} />
        <MultKey clickHandle={props.multClick} />
        <DivideKey clickHandle={props.divideClick} />        
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return{
        addClick: () => dispatch(addNum()),
        subClick: () => dispatch(subNum()),
        multClick: () => dispatch(multNum()),
        divideClick: () => dispatch(divideNum()),
        keyPressHandle: event => {
            switch(String.fromCharCode(event.keyCode)){
                case '+': 
                    return dispatch(addNum())
                case '-': 
                    return dispatch(subNum())
                case '*': 
                    return dispatch(multNum())
                case '/': 
                    return dispatch(divideNum())
                default:
                    console.log('no valid key found - keycode = ', event.keyCode)
            }
        }
    }
}

export default connect(null, mapDispatchToProps)(OpsContainer);