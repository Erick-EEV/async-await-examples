import React from 'react'

export default function Await() {


 
    const makeRequest = () => {
        return callAPromise()
          .then(() => callAPromise())
          .then(() => callAPromise())
          .then(() => callAPromise())
          .then(() => callAPromise())
          .then(() => {
            throw new Error("oops");
          })
      }
      
      makeRequest()
        .catch(err => {
          console.log(err);
          // output
          // Error: oops at callAPromise.then.then.then.then.then (index.js:8:13)


    return (
        <div>
            <h2>Hello World</h2>
        </div>
    )
}
