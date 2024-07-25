import React, {useState} from 'react'
import './quiz.css'
import { data } from '../../data'

export default function Quiz() {

    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    //for checking last question
    const [isLastPage, setIsLastPage] = useState(false);
    //to check score
    const [score, setScore] = useState(0);
    const [lock, setLock] = useState(false);

    function nextQuestion ()
    {
        setLock(false);
        //not last question
        if (index < data.length-1)
        {
            setIndex(index + 1)
        setQuestion(data[index + 1])
    }
        //last question
        else{
            setIsLastPage(true);
        }
    }

    function checkAnswer(ans)
    {
        if(lock === false){
            if (ans === question.ans){
                setScore(score + 1);
            }
            setLock(true);
        }
    }

    if(isLastPage === true)
    {
        return(
            <h2>Quiz Score = {score}</h2>
        )
    }

    return (
        <div className='quiz'>
            <h1>Kod Quiz</h1>
            <h3>{question.question}</h3>
            <ul>
                <li onClick={() => {checkAnswer('1')}}>{question.option1}</li>
                <li onClick={() => {checkAnswer('2')}}>{question.option2}</li>
                <li onClick={() => {checkAnswer('3')}}>{question.option3}</li>
                <li onClick={() => {checkAnswer('4')}}>{question.option4}</li>
            </ul>
            <button onClick={nextQuestion}>NEXT</button>
            <div>Question: {index + 1} of {data.length}</div>
        </div>
    )
}