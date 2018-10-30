import React from 'react';
import './Quiz.css';


const Quiz=({questions,answerButtonClick,correctButtonClick})=>{
    
  	return(
         <div>    
         <div id='quiz'>
         <h2>{questions.question}</h2>      
         <button onClick={answerButtonClick} id={questions.answer1}>{questions.answer1}</button>
         <button onClick={answerButtonClick} id={questions.answer2}>{questions.answer2}</button>
         <button onClick={answerButtonClick} id={questions.answer3}>{questions.answer3}</button>
         <button onClick={answerButtonClick} id={questions.answer4}>{questions.answer4}</button>
         </div>
         </div>
		);  
}

export default Quiz;
