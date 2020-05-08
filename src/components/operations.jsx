import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {addNum, subNum, multNum, divideNum} from '../actions'
import {ADD, SUBTRACT, MULTIPLY, DIVIDE} from '../constants'

function AddKey(props){
    return <button className='key' id='add' onClick={props.clickHandle}>+</button>
}

function SubKey(props){
    return <button className='key' id='sub' onClick={props.clickHandle}>-</button>
}

function MultKey(props){
    return <button className='key' id='mult' onClick={props.clickHandle}>\*</button>
}

function DivideKey(props){
    return <button className='key' id='divide' onClick={props.clickHandle}>/</button>
}

function OpsContainer(props){
    return(
        <div id='ops-keys'>
        <AddKey value={ADD} clickHandle={props.addClick} />
        <SubKey value={SUBTRACT} clickHandle={props.subClick} />
        <MultKey value={MULTIPLY} clickHandle={props.multClick} />
        <DivideKey value={DIVIDE} clickHandle={props.divideClick} />        
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return{
        addClick: () => dispatch(addNum()),
        subClick: () => dispatch(subNum()),
        multClick: () => dispatch(multNum()),
        divideClick: () => dispatch(divideNum())
    }
}

export default connect(null, mapDispatchToProps)(OpsContainer);