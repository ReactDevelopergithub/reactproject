import React, { createRef} from 'react';

export default class Ctreateref extends React.Component{
    constructor(){
        super();
        this.inputref = createRef();
    }
    componentDidMount(){
       //console.warn(this.inputref)
    }
    change() {
        console.warn(this.inputref.current.value="1000");
        this.inputref.current.style.color='blue';
        this.inputref.current.style.backgroundColor='red';


    }
    render(){
        return(
            <>
                <h4>Ref in class cmponent</h4>
                <input type="text" ref={this.inputref}/>
                <button onClick={()=>this.change()}>Change backgroundColor</button>
            </>
        )
    }
}