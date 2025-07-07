import React from 'react'
import './Quiz.css'

function App() {
  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      <h2>This is Question 1</h2>
      <ul>
        <li>Answer 1</li>
        <li>Answer 2</li>
        <li>Answer 3</li>
        <li>Answer 4</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default App