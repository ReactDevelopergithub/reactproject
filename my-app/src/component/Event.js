import React, {useState} from 'react'

function Event(){
   // let data = "change the page";
   //State is the hook that is used in rerender the data
    const[data, setData] = useState("mansab")
    function message(){
        setData("Iqbal")
        //alert(data)
    }
    return(
        <>
            <div>AlertShow</div>        
            <button className="btn btn-success" onClick={message}>{data}</button>
            <button className="btn btn-success" onClick={()=>alert('Message')}>Message</button>
        </>
    )
}
export default Event