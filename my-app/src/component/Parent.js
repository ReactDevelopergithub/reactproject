import React from 'react'
import Child from './Child';
export default function Parent() {
    const message=(data) =>{
        alert(data)
    }
  return (
    <>
        <h3>Parent page</h3>
        <Child alert={message}/>
    </>
  )
}
