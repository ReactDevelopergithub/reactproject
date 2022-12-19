import React from 'react'


class Classstate extends React.Component{
    constructor(){
        super();
        this.state={
            data: 1
        }
    }
    apple(){
        this.setState({
            data: this.state.data + 1
        })
    }
    render(){
        return(
            <>
                <h4>{this.state.data}</h4>
                <button className="btn" onClick={()=>this.apple()}>Click me</button>
            </>
        )
    }
}
export default Classstate