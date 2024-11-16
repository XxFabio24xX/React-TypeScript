import { useState } from "react"

const ComponentCounter = () => {
    const [ counter, setCounter ] = useState<number>(0)

    const incrementarCounter = () => {
        setCounter((prev)=> prev + 1)
    }

    const descrementarCounter = () => {
        if (counter > 0) {
        setCounter((prev)=> prev - 1)
        }
    }
    
  return (
    <div>
      <h2>Valor del Counter: {counter}</h2>
      <button onClick={incrementarCounter}>Incrementar</button>
      <button onClick={descrementarCounter}>Decrementar</button>
    </div>
  )
}

export default ComponentCounter
