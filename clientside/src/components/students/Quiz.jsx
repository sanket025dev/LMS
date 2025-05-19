import React from 'react'
import { useState, useRef} from 'react'
import {quizData}  from '../../assets/quizData'

const Quiz = () => {

    let [index, setIndex] = useState(0)
    const [question, setQuestion] = useState(quizData[index])
    const [lock, setLock] = useState(false)
    const [score,setScore] = useState(0)
    const [result, setResult] = useState(false)

    // ref
    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    const opt = [Option1,Option2,Option3,Option4]

    const checkAns = (e,ans)=>{
        if(lock===false){
            if (question.ans === ans) {
              e.target.classList.add("bg-green-200");
              setLock(true);
              setScore(prev=>prev+1)
            } else {
              e.target.classList.add("bg-red-200");
              setLock(true);
              opt[question.ans-1].current.classList.add("bg-green-200")
            }
        }
    }

    const next = ()=>{
        if(lock===true){
            if(index===quizData.length-1){
                setResult(true);
                return 0;
            }   
            setIndex(++index);
            setQuestion(quizData[index]);
            setLock(false);
            opt.map((option)=>{
                option.current.classList.remove("bg-green-200")
                option.current.classList.remove("bg-red-200")
                return null;
            })
        }
    }

    const retest = () =>{
        setIndex(0);
        setQuestion(quizData[0]);
        setScore(0);
        setLock(false);
        setResult(false);   
    }

  return (
    <>
    
    <div className='flex justify-center items-center h-screen bg-orange-300/20'>
        <div className='w-full max-w-lg bg-white p-5 rounded shadow-lg'>
            <h3 className='p-2 border-b text-center font-semibold mb-2 text-xl'>
                Multiple Choice
            </h3>
            <div>
                {result ? <></> : <>
                <h4>{index+1}. {question.question}</h4>
                <ul className='pt-2 pb-3'>
                    <li ref={Option1} onClick={(e)=>{checkAns(e,1)}} className='block w-full p-2 mt-3 rounded border hover:bg-gray-100 cursor-pointer'>{question.option1}</li>
                    <li ref={Option2} onClick={(e)=>{checkAns(e,2)}} className='block w-full p-2 mt-3 rounded border hover:bg-gray-100 cursor-pointer'>{question.option2}</li>
                    <li ref={Option3} onClick={(e)=>{checkAns(e,3)}} className='block w-full p-2 mt-3 rounded border hover:bg-gray-100 cursor-pointer'>{question.option3}</li>
                    <li ref={Option4} onClick={(e)=>{checkAns(e,4)}} className='block w-full p-2 mt-3 rounded border hover:bg-gray-100 cursor-pointer'>{question.option4}</li>
                </ul>
                <button onClick={next} className='block w-full bg-green-700 text-white p-2 mt-3 rounded'>Next</button>
                <div className='text-center text-gray-400 text-sm mt-1'>{index+1} of {quizData.length} Questions</div>
                </>}
                {result ? <>
                <h2>Your Score {score} out of {quizData.length}</h2>
                <button onClick={retest} className='block w-full bg-blue-700 text-white p-2 mt-3 rounded'>Take Re-Test?</button>
                </>:<></>}
            </div>
        </div>
    </div>

    </>
  )
} 

export default Quiz