import React from 'react'

export default function Await() {


 
    const makeRequest = async () => {
        await callAPromise()
        await callAPromise()
        await callAPromise()
        await callAPromise()
        await callAPromise()
      }


    return (
        <div>
            <h2>Hello World</h2>
        </div>
    )
}
