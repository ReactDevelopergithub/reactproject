import React, { useRef} from 'react'

export default function Reffunction() {
    let inputref = useRef(null);
    const handler =()=>{
        console.warn("function call");
        inputref.current.value="1000";
        inputref.current.backgroundColor='#ddd';
    }
  return (
    <div>
        <h3>ref in function component</h3>
        <input type="text" ref={inputref}/>
        <button onClick={handler}>Function call</button>
    </div>
  )
}
