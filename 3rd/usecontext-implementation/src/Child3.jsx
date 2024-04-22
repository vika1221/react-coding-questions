import React from 'react'
import { useContext } from 'react'
import { myContext } from './App'

export default function Child3() {
    const data1 = useContext(myContext);
    // const data2 = useContext(myContext);
    console.log(data1);
  return (
    <div>
      <h3>Child 3 component</h3>
      <h2>Message from parent component : {data1.data1}</h2>
      <h2>More Messages from parent component : {data1.data2}</h2>
    </div>
  )
}
