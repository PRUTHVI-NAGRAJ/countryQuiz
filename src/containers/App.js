import React, { Component } from 'react';
import Quiz from '../components/Quiz';
import Results from '../components/Results';
import './App.css';
import {questions} from '../questions';

class App extends Component {
  constructor(){
    super();
     this.state={
     score: 0,
     index: 0
    };  
  }

onAnswerButtonClick=(event)=>{
  if(questions[this.state.index].correct===event.target.id){
      this.setState(({score,index}) => ({
      score: score + 1,
      index: index + 1
    }))

  }
  else{
   this.setState(({score,index}) => ({
      score: score + 0,
      index: index + 1
  }))}};



  render(){
    const {index,score}= this.state;
    return (
      <div className="App"> 
      <h1> Country Quiz </h1>
 {((index)<=9) && <Quiz questions={questions[index]} 
                                   answerButtonClick={this.onAnswerButtonClick}
                                                 /> }

{((index)===10) &&  <Results score={score}/> }
     </div>
    );
  }
}

export default App;
