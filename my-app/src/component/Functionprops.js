import React from 'react'

export default function Functionprops(props) {
  return (
    <div>
      <h4>Call the Function in using props</h4>
      <button onClick={props.data}>Call The Function</button>
    </div>
  )
}
