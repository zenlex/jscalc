import React from 'react'
import {connect} from 'react-redux'
import {clickDigit} from '../actions'


function DigitKey(props){
    return <button className='key digit' value={props.value} onClick={props.clickHandle}>{props.value}</button>
}

const DigitContainer = props => {
    const digitArr = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.']
    let digGrid = digitArr.map((digObj, i, digitArr)=>{
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

const mapDispatchToProps = dispatch => {
    return{
        clickHandle: event => {
            dispatch(clickDigit(event.target.value))
            
        }
    }
}

export default connect(null, mapDispatchToProps)(DigitContainer);