import React from 'react';

export default class Classprops extends React.Component{
    render(){
        return(
            <>
             <div style={{backgroundColor: 'blue'}}>{this.props.infor}</div>
             <div>{this.props.email}</div>
            <div></div>
            <div style={{backgroundColor: 'blue'}}>{this.props.name}</div>
            </>
        )
    }
}