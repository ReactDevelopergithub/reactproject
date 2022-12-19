import React from "react";
class Purecomponent extends React.PureComponent{
    constructor(){
        super();
        this.state={
            count: 0
        }
    }
    render(){
        console.warn("check rerendering");
        return(
            <>
                <h3>Pure component in class{this.state.count}</h3>
                <button onClick={()=>this.setState({count:this.state.count + 1})}>check rerendering</button>
            </>
        )
    }
}
export default Purecomponent