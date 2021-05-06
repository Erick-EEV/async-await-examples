import React from 'react'

export default function Await() {


 
    const makeRequest = async () => {
        await callAPromise()
        await callAPromise()
        await callAPromise()
        await callAPromise()
        await callAPromise()
        throw new Error("oops");
      }
      
      makeRequest()
        .catch(err => {
          console.log(err);
          // output
          // Error: oops at makeRequest (index.js:7:9)
        })



    return (
        <div>
            <h2>Hello World</h2>
        </div>
    )
}
