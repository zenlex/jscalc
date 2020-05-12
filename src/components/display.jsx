import React from 'react';
import { connect } from 'react-redux';

function Display(props){
    return(
        <div id='display-wrapper'>
            <div id='history'>
                {props.formula}
            </div>
            <div id='display'>
                {props.display}
            </div>
        </div>
        
    )
}

function DisplayContainer(props){
    return <Display display={props.display} formula={props.formula}/>
}

function mapStateToProps(state){
    return {
        formula : state.formula,
        display: state.display
    }
}

export default connect(mapStateToProps)(DisplayContainer);