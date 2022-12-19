import React, {useRef} from 'react';
import Forwardrefchild from './Forwardrefchild';
function Forwardrefparent() {
    let inputRef = useRef(null);
    function transfer(){
        console.warn("Forward data");
        inputRef.current.style.color ="red";
    }
  return (
    <div>
      <h3>forward ref in parent in child data transfer</h3>
        <Forwardrefchild ref={inputRef}/>
        <button onClick={transfer}>click me</button>
    </div>
  )
}

export default Forwardrefparent
