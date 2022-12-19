import React, { useState, useEffect } from 'react'

function Createhook(props) {
  const [count, setCount] = useState(100);
  const [data, setData] = useState(10);
  useEffect(() => {
    console.warn("Name", props.name);
  }, [props.name])
  useEffect(() => {
    console.warn("Address", props.address);
  }, [props.address])
  useEffect(() => {
    console.warn("show the count", count);
  }, [count])
  useEffect(() => {
    console.log("show the data", data);
  }, [data])
  return (
    <div>
      <h4>check the useEffect and useState{count}</h4>
      <h4>check the useEffect and useState{data}</h4>
      <button onClick={() => setData(data + 1)}>update the data</button>
      <button onClick={() => setCount(count + 1)}>update the count</button>
      <h2>using the props in run the useEffect</h2>
      <span style={{ textColor: 'blue' }}>Name:{props.name}</span>
      <span style={{ textColor: 'blue' }}>Address:{props.address}</span>
    </div>
  )
}

export default Createhook
