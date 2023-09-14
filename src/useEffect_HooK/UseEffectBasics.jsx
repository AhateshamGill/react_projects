import React, { useEffect, useState } from 'react'

const UseEffectBasics = () => {
    const [count, setCount] = useState(0)
    useEffect(() =>{
        // console.log('Component Re-rendered')
        document.title = `(${count}) New Messages`
    },[count])
  return (
    <>
    <div className="container text-center">
        <h1 className="display-a">
            Counter
        </h1>
        <h1 className="display-1">
            {count}
        </h1>
        <button onClick={()=>setCount(count+1)} className="btn btn-outline-dark">
            Increase
        </button>
    </div>
    </>
  )
}

export default UseEffectBasics