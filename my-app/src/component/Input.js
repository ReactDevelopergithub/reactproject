import React, {useState} from 'react'

export default function Input() {
    const[data, setData] = useState(null);
    const[print, setPrint] = useState(false);
    const getdata =(val)=>{
        console.log(val.target.value);
        setData(val.target.value);
        setPrint(false);
    }
  return (
    <div>
        <h3>Get a value in input Box!</h3>
        {
            print?
            <h5>{data}</h5>
            :null
        }
        <input type="text" onChange={getdata} />
        <button onClick={()=>setPrint(true)}>Print a value</button>
    </div>
  )
}
