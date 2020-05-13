import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {clearIt, equalIt} from '../actions'
import {bsIt} from '../actions'

function ClearKey(props){
    return <button className='key' id='clear' onClick={props.clickHandle}>C</button>
}

function BSKey(props){
    return <button className='key' id='bskey' onClick={props.clickHandle}>&#9003;</button>
}
const ClearContainer = props => {
    useEffect(() => {
        document.addEventListener('keydown', props.keyDownHandle)
        return() => document.removeEventListener('keydown', props.keyDownHandle)
    }, [props.keyDownHandle])

        return(
            <div id='clear-bs'>
                <ClearKey clickHandle={props.clickHandle} />
                <BSKey clickHandle={props.backSpace} />
            </div>
        )
}

const mapDispatchToProps = dispatch => {
    return{
        keyDownHandle: event => {
            if(event.keyCode === 13){
                event.preventDefault()
                dispatch(equalIt())
            }
            if(event.keyCode === 8){
                event.preventDefault()
                dispatch(bsIt())
            }
        },
        clickHandle: () => {
            dispatch(clearIt())
        },
        backSpace: () => {
            dispatch(bsIt())
        }
    }
}

export default connect(null, mapDispatchToProps)(ClearContainer);