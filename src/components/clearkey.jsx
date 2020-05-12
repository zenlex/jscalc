import React from 'react'
import {connect} from 'react-redux'
import {clearIt} from '../actions'


function ClearKey(props){
    return <button className='key clear' id='clear' onClick={props.clickHandle}>C</button>
}

const ClearContainer = props => {
        return(
            <ClearKey clickHandle={props.clickHandle} />
        )
}

const mapDispatchToProps = dispatch => {
    return{
        clickHandle: event => {
            dispatch(clearIt())
            
        }
    }
}

export default connect(null, mapDispatchToProps)(ClearContainer);