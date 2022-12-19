import React, { useState } from 'react'

function Ifcondition() {
    const[login,setLogin] = useState(0);
  return (
    <div>
       {login===0? <h3>Hello World</h3>:login===1? <h4>Show the data</h4>:<h4>Show the information</h4>}
       <button onClick={()=>setLogin(3)}>click button</button>
    </div>
  )
}

export default Ifcondition
