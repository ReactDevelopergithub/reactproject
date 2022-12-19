import React from 'react'

export default function Child(props) {
    const data = 'mansabiqbal@gmail.com'
  return (
    <>
        <h4>Child page</h4>
        <button onClick={()=>props.alert(data)}>Alert in child page</button>
    </>
  )
}
