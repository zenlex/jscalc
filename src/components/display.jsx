import React from 'react';
import { connect } from 'react-redux';

function Display(props){
    
    return(
        <div id='display'>
            <div id='history'>
                {props.formula}
            </div>
            {props.currNum}
        </div>
    )
}

function DisplayContainer(props){
    return <Display currNum={props.currNum} formula={props.formula}/>
}

function mapStateToProps(state){
    return {
        currNum : state.currNumArr,
        formula : state.formula
    }
}

export default connect(mapStateToProps)(DisplayContainer);