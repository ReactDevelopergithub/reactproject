import React from 'react'

class Shouldupdate1 extends React.Component{
    constructor(){
        super();
        this.state={
            count:  0
        }
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate", this.state.count);
        if(this.state.count>5 && this.state.count<10){
            return true;
        }
       
    }
    render(){
        return(
            <div>
                <h3>Component should update?{this.state.count}</h3>
                <button onClick={()=>this.setState({count:this.state.count + 1})}>Update condition</button>
            </div>
        )
    }
}
export default Shouldupdate1