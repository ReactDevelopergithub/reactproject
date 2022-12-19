import React, {useState} from 'react'

export default function Controll() {
    const[val,setVal] = useState("");
    
  return (
    <div>
       <h3>Controll Component</h3>
       <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
       <h3>{val}</h3>
    </div>
  )
}
