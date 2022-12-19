import React, { useState } from 'react'

function Hoc() {
  return (
    <div>
      <h3>High order component</h3>
      
      <Firstoder cmp={Counter}/>
    </div>
  )
}
function Firstoder(props){
    return(
        <>
           <h4> import the other component</h4>
           <h3 style={{backgroundColor: 'red', width: '300px'}}>Count:<props.cmp/> </h3>
           <h3 style={{backgroundColor: 'green', width: '300px'}}>Count:<props.cmp/> </h3>
        </>
    )
}
function Counter(){
    const[count, setCount] = useState(0);
    return(
        <>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </>
    )
}
export default Hoc
