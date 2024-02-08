import React from 'react'

export const Contador = ({count, setCount}) => {
    const handleIncrementar =()=>{
        setCount(count+1)
    }
    const handleDecrementar =()=>{
        setCount(count-1)
    }
    const handleReset =()=>{
        setCount(0)
    }
  return (
    <div>
        <span>Contador {count}</span>
        <div>
            <button onClick={handleIncrementar}>Incrementar</button>
            <button onClick={handleDecrementar}>Decrementar</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}
