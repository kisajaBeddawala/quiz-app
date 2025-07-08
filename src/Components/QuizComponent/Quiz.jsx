import React, { useRef, useState } from 'react'
import './Quiz.css'
import {data} from '../../assets/data';

function Quiz() {
  let [index,setIndex] = useState(0);
  let [questions,setQuestions] = useState(data[index]);
  let [lock,setLock] = useState(false);
  let [score,setScore] = useState(0);
  let [result,setResult] = useState(false);

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  let option_array = [option1,option2,option3,option4];

  function checkAnswer(e,ans){
    if(lock)return;
    if(questions.ans === ans){
      e.target.classList.add('correct');
      setScore(s => s + 1);
    }else{
      e.target.classList.add('wrong');
      option_array[questions.ans - 1].current.classList.add('correct');
    }
    setLock(true);
  }

  function nextQuestion(){
    if(!lock)return;
    if(index == data.length - 1){
      setResult(true);
      return;
    }
    setIndex(index + 1);
    setQuestions(data[index + 1]);
    setLock(false);
    option_array.map((option) => {
      option.current.classList.remove('correct');
      option.current.classList.remove('wrong'); 
    })
  }

  function restart(){
    setIndex(0);
    setQuestions(data[0]);
    setLock(false);
    setScore(0);
    setResult(false);
  }
  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      {result ? <>

        <h2>Quiz Completed!</h2>
        <h2>Your Score: {score} out of {data.length}</h2>
        <button onClick={restart}>Restart</button>
      
      </> 
      : <>
      <h2>{index + 1}. {questions.question}</h2>
      <ul>
        <li ref={option1} onClick = {(e)=>checkAnswer(e,1)}>{questions.Option1}</li>
        <li ref={option2} onClick = {(e)=>checkAnswer(e,2)}>{questions.Option2}</li>
        <li ref={option3} onClick = {(e)=>checkAnswer(e,3)}>{questions.Option3}</li>
        <li ref={option4} onClick = {(e)=>checkAnswer(e,4)}>{questions.Option4}</li>
      </ul>
      <button onClick={nextQuestion}>Next</button>
      <div className="index">{index + 1} of {data.length} questions</div>
      </>}
    </div>
  )
}

export default Quiz