import React, { useEffect, useState } from 'react'

const CleanUpFunction = () => {
    const [size, setSize] = useState(window.innerWidth);
    const windowSize = () => {
        setSize(window.innerWidth);
    }
    useEffect(() => {
        // console.log('Use Effect Functoin')
        window.addEventListener('resize', windowSize);

        return () => {
            // console.log('Clean Up Function')
            window.removeEventListener('resize', windowSize)
        }
    })
    return (
        <>
            <div className="container">
                <h1 className="display-1 text-center">
                    Window Size: {size}px
                </h1>
            </div>
        </>
    )
}

export default CleanUpFunction