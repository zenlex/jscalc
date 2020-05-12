import React, {useEffect} from 'react'
import {equalIt} from '../actions'
import {connect} from 'react-redux'

function EqualsKey(props){
    return <button id='equals' className='key' onClick={props.onClick}>=</button>
}

function EqualsContainer(props){
    useEffect(() => {
        document.addEventListener('keypress', props.keyPressHandle)
        return (() => document.removeEventListener('keypress', props.keyPressHandle))
    }, [props.keyPressHandle] )

    return <EqualsKey value='equals' onClick={props.onClick} />
}

function mapDispatchToProps(dispatch){
    return{
        onClick: () => dispatch(equalIt()),
        keyPressHandle: event => {
            if(event.keyCode === 13){
                event.preventDefault()
                dispatch(equalIt())
            }
        }
    }
}

export default connect(null, mapDispatchToProps)(EqualsContainer);