import React, { useState } from 'react'

export default function Toggle() {
    const[status, setStatus] = useState(true)
  return (
    <div>
        <h4> hide and show the text</h4>
        {
            status?
            <div>Hello World</div>
            :null
        }
        <button onClick={()=>setStatus(false)}>hide</button>
        <button onClick={()=>setStatus(true)}>show</button>
        <button onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
  )
}
