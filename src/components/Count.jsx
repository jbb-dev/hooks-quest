import React, { useState } from 'react';


const Count = () => {
    const [count, setCount] = useState(0)
   
    const setValue = (value) => {
        setCount(Number(value))
    }

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return(
        <>

        <h1>Quelle est la valeur de départ ?</h1>
        <input type='number' onChange={(e) => setValue(e.target.value)}></input>
        <h2>{count}</h2>
        <button value="Decrement Value" onClick={() => decrement()}> -1 </button>
        <button value="Increment Value" onClick={() => increment()}> +1 </button>



        </>
    )


}

export default Count

