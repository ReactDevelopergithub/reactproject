import React, { useState } from 'react'

export default function Form() {
    const[name, setName] = useState("");
    const[tnc, setTnc] = useState(false);
    const[interset, setInterset] = useState("");
    const getvalue = (e)=>{
        console.log(name,interset, tnc);
        e.preventDefault();
    }
  return (
    <div>
        <form onSubmit={getvalue}>
            <input type="text" placeholder='Enter name' onChange={(e)=>setName(e.target.value)}/><br/><br/>
            <select onChange={(e)=>setInterset(e.target.value)}>
                <option>Select option</option>
                <option >car</option>
                <option >Bike</option>
            </select><br/><br/>
            <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept Terms and Condtions</span><br/><br/>
            <button>Submitted</button>
        </form>
    </div>
  )
}
