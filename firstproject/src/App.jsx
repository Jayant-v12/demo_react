import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  function fun() {
    return "inside the function";
  }

  function sum(a, b) {
    return a + b;
  }

  function calc(a, b, op) {
    if (op === "+") {
      return a + b;
    } else if (op === "-") {
      return a - b;
    } else {
      return a * b;
    }
  }

  const name = "John";
  let x = 10;
  let y = 20;

  return (
    <div>
      <h1>User Variable</h1>
      <h3>Value of variable</h3>
      <h4>{x + y}</h4>
      <h3>{fun()}</h3>
      <h3>Parameter function: {sum(30, 67)}</h3>

      <h3>Calc (+): {calc(10, 5, "+")}</h3>
      <h3>Calc (-): {calc(10, 5, "-")}</h3>
      <h3>Calc (*): {calc(10, 5, "*")}</h3>
    </div>
  )
}

export default App;