import React from 'react';
import { connect } from 'react-redux';

function Display(props){
    
    return(
        <div id='display'>
            {props.currNum}
        </div>
    )
}

function DisplayContainer(props){
    return <Display currNum={props.currNum}/>
}

function mapStateToProps(state){
    return {currNum : state.currNumArr}
}

export default connect(mapStateToProps)(DisplayContainer);