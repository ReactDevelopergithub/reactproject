import React, {useRef} from 'react'

export default function Uncontroll() {
    let inputRef = useRef('')
    function submition(e){
        e.preventDefault();
        console.warn("this is value in first input", inputRef.current.value);
        let inputRef1 = document.getElementById("message").value
        console.warn("this is value in second input", inputRef);
    }
  return (
    <div>
        <h3>Uncontroll component</h3>
        <form onSubmit={submition}>
            <input type="text" ref={inputRef} />
            <input type="text" />
            <input type="text"  id='message'/>
            <button>Click me</button>
        </form>
    </div>
  )
}
