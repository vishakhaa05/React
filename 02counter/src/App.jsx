import { useState } from "react";
function App() {
   const [counter, setCounter]=useState(5)
  // let counter = 5
  const AddValue = () => {
    console.log("clicked", counter);
    // counter=counter+1
    setCounter(counter+1)
  }
  const RemoveValue = () => {
    console.log("clicked", counter);
    // counter=counter+1
    setCounter(counter-1)
  }
  return (
    <>
    <h1>chai or react</h1>
    <h2>counter value : {counter}</h2>
    <button onClick={AddValue}>Add Value</button>
    <br />
    <button onClick={RemoveValue}>Remove Value</button>
    <p>foooter:{counter}</p>
    </>
  )
}

export default App
