import React from 'react'

export default function Useprops(props) {
  return (
    <div>
        <h3>{props.hme}</h3>
        
        <div className='design'>Address:{props.other.address}</div>
        <div>phone-number:{props.other.phone}</div>
    </div>
  )
}
