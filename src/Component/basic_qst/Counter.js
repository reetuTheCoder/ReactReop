import React, { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)

  const  handleDecrrment = () =>{
     if (count > 0) {
         setCount( count - 1)
     }
    }
  return (
    <div>
        <h4>{count}</h4>
        <button onClick={handleDecrrment}>decrement</button>
        <button onClick={()=> setCount(count + 1)}>increment</button>

    </div>
  )
}
