import React from 'react'

class Renderlifecycle extends React.Component{
    constructor(){
        super();
        console.log("constructor")
        this.state={
            data: 0,
        }
    }
    componentDidUpdate(preProps,preState, snapshot){
        console.log("componentDidMount", preState.data,this.state.data)
        if(preState.data === this.state.data){
            alert("do not enter the same data")
        }
        {/*if(this.state.data<10)
        { this.setState({data:this.state.data + 1})}*/}
    }
    render()
    {
        console.log("render()")
        return(
            <div>
                <h3>{this.state.data}</h3>
                <button onClick={()=>this.setState({data:this.state.data + 1})}>render the class</button>
                
            </div>
        )
    }
}
export default Renderlifecycle