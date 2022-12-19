import React, {forwardRef} from 'react'

function Forwardrefchild(props, ref) {
  return (
    <div>
      <h3>child </h3>
      <input type="text" ref={ref}/>
    </div>
  )
}

export default forwardRef(Forwardrefchild)
