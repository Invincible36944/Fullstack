import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello'
import Header from './Header'
import Content from './Content'
import Total from './Total'


function App() {
  const [count, setCount] = useState(0)
  const age = 26;

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Hello name = "Gagan" age = {26+10}/>
      <Hello name = "Rohan" age = {age}/> */}

{/* **************************************************************** */}

    <Header course = {course}/>
    <Content part1 = {part1} exercise1 = {exercises1} part2 = {part2} exercise2 = {exercises2} part3 = {part3} exercise3 = {exercises3}/> 
    {/* <Content part = {part2} exercise = {exercises2}/> 
    <Content part = {part3} exercise = {exercises3}/>    */}
    <Total exercise1 = {exercises1} exercise2 = {exercises2} exercise3 = {exercises3}/>
    </>
  )
}

export default App
