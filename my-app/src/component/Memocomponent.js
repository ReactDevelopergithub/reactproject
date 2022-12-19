import React, { useState, useMemo } from 'react'

function Memocomponent() {
    const[count,setCount] = useState(10);
    const[item,setItem] = useState(101);
    const multivalues = useMemo(function multivalues(){
        return (
            console.warn("memo is just like the pure component in class component"),
            count*2
        )
    },[count]);
  return (
    <>
        <h3>use of the memo in function</h3>
        <h4>{count}</h4>
        <h4>{item}</h4>
        <h5>{multivalues}</h5>
        <button onClick={()=>setCount(count*1.2)}>Click me</button>
        <button onClick={()=>setItem(item+2)}>Click me</button>
    </>
  )
}

export default Memocomponent

