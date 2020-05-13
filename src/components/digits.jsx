import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {clickDigit, equalIt} from '../actions'

function EqualsKey(props){
    return <button id='equals' className='key' onClick={props.onClick}>=</button>
}

function DigitKey(props){
    return <button className='key digit' id={props.id} tabIndex='-1' value={props.value} onClick={props.clickHandle}>{props.value}</button>
}

const DigitContainer = props => {
    useEffect(() => {
        document.addEventListener('keypress', props.keyPressHandle)
        return(() => document.removeEventListener('keypress', props.keyPressHandle))
    }, [props.keyPressHandle] )
    
    let digGrid = props.digitArr.map((digObj, i, digitArr)=>{
        return(
            <DigitKey value={digitArr[i]} id={props.idArr[i]} clickHandle={props.digitClick} key={i} />
        )
    })
    return(
        <div id='dig-grid'>
            {digGrid}
            <EqualsKey value='equals' onClick={props.equalsClick} />
        </div>
    )
}

const digitArr = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.'];
const idArr = ['nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one', 'zero', 'decimal']

const mapStateToProps = state => {
    return{
        digitArr: digitArr,
        idArr: idArr
    }
}

const mapDispatchToProps = dispatch => {
    return{
        equalsClick: () => dispatch(equalIt()),
        digitClick: event => {
            dispatch(clickDigit(event.target.value))
        },
        keyPressHandle: event => {
            let keyVal = (String.fromCharCode(event.keyCode));
            if(event.keyCode===13){
                event.preventDefault()
                dispatch(equalIt())
            }
            if(digitArr.includes(keyVal)){
                dispatch(clickDigit(keyVal))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DigitContainer);