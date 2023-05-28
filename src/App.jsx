import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);

  function minus() {
    setCount(prevCount => prevCount - 1)
  }

  function plus() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      <div className="h-screen min-w-[320px] m-0 flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold">Counter</h1>
        <div className="m-6 w-[200px] flex items-center justify-between">
          <button onClick={ minus }>-</button>
          <p className="text-5xl text-fuchsia-400">{count}</p>
          <button onClick={plus}>+</button>
        </div>
      </div>
    </>
  )
}

export default App
