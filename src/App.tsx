import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  console.log(input)

  

  return (
    <main className="calc-container">
      <div>
        <h1>calc</h1>
        <div className="theme-container">
          <label>THEME</label>
          <div className="switch"></div>
        </div>
      </div>
      <div className="display">
        <input onChange={(e) => {setInput(e.target.value)}} value={input}></input>
      </div>
      <div className="grid-container">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>DEL</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button>/</button>
        <button>x</button>
        <button>RESET</button>
        <button>=</button>
      </div>
    </main>
  )
}

export default App
