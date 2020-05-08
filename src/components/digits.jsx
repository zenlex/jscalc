import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {clickDigit} from '../actions'

function DigitKey(props){

    return <button className='key digit' value={props.value} onClick={props.clickHandle}>{props.value}</button>
}

const DigitContainer = props => {

    useEffect(() => {
        document.addEventListener('keypress', props.keyPressHandle)
        return(() => document.removeEventListener('keypress', props.keyPressHandle))
    }, [props.keyPressHandle] )
    
    let digGrid = props.digitArr.map((digObj, i, digitArr)=>{
        return(
            <DigitKey value={digitArr[i]} clickHandle={props.clickHandle} key={i} />
        )
    })
    return(
        <div id='dig-grid'>
            {digGrid}
        </div>
    )
}

const digitArr = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.'];

const mapStateToProps = state => {
    return{
        digitArr: digitArr
    }
}

const mapDispatchToProps = dispatch => {
    return{
        clickHandle: event => {
            dispatch(clickDigit(event.target.value))
        },
        keyPressHandle: event => {
            let keyVal = (String.fromCharCode(event.keyCode));
            if(digitArr.includes(keyVal)){
                dispatch(clickDigit(keyVal))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DigitContainer);