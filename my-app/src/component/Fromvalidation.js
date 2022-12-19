import React, { useState } from 'react'

export default function Fromvalidation() {
    const[user,setUser] = useState('');
    const[password, setPassword] = useState("");
    const[usererr, setUsererr] = useState(false);
    const[passerr, setPasserr] = useState(false);
    function getdata(e){
        if(user.length<3 || password.length<3){
            alert("type the correct ")
        }else{
            alert("All good :>")
        }
        e.preventDefault()
    }
    function getinputdata(e){
        console.log(e.target.value.length);
        let items = e.target.value;
        if(items.length<3){
            console.log('invalid values')
            setUsererr(true)

        }else{
            console.log("valid values")
            setUsererr(false)
        }
        setUser(items)
    }
    function passhandler(e){
        console.log(e.target.value)
        let items = e.target.value;
        if(items.length<3){
            console.log("passwod not valid");
            setPasserr(true);
        }else{
            setPasserr(false)
        }
        setPassword(items)
    }
  return (
    <div>
        <form onSubmit={getdata}>
            <input type="text" placeholder='Enter name' onChange={getinputdata} />{
                usererr? <span>User not valid</span>:null
            }
            <br/><br/>
            <input type="password" onChange={passhandler} placeholder='Enter Password' />{passerr?<span>password not valid</span>:null}
            <br/><br/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
