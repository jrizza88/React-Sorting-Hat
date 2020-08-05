import React from 'react';
import WelcomeList from './components/Welcome/WelcomeList';
import NameForm from  "./components/Welcome/NameForm";
import Question from './components/Questions/Question';
import QuestionCount from "./components/Questions/QuestionCount";
import AnswerOption from "./components/Answers/AnswerOption";

import './App.css';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      hogwartsInfo: [
        {
        nameOfStudent: '',
        id: ''
        }
      ],
      studentList: [],
      hogwartsQuiz: {
        counter: 0,
        questionId: 1,
        question: ''
      }
    }
  }

  addName = e => {
    e.preventDefault();
  
    const hogwartsInfo = this.state.hogwartsInfo.splice();
    hogwartsInfo.push({nameOfStudent: this.state.studentList, id: Date.now()})
    this.setState({hogwartsInfo, studentList: []})
    
    // if (this.state.studentList.length === 1) {

    // }

    console.log('name....', this.state.nameOfStudent)
    console.log('hogwarts name....', this.state.hogwartsInfo)
    console.log('student....', this.state.studentList)
    console.log('value...', e.target.value)

  }


  handleChangeState = e => this.setState({ [e.target.name]: e.target.value });

  render(){
   if (this.state.hogwartsInfo[0].id) { 
     console.log('Checking Id', this.state.hogwartsInfo[0].id)
     return (
       <div>
         <h1>Sorting Hat Quiz</h1>
        <WelcomeList 
        nameProp={this.state.hogwartsInfo} 
        /> 
        <Question content="Out of the colors listed, which color is your most preferred?" />
      </div>
     ) } else {
       return (
         <div>
      <h1>Welcome to the sorting hat Quiz. Find out which house you belong in today. But first, please enter your name.</h1>
        <NameForm 
      handlePropSubmit={this.addName} 
      handleChangeProp={this.handleChangeState} 
      value={this.state.studentList}
      
      />
 
      <h3>Your Hogwarts name is: {this.state.studentList}</h3>
      </div>
       )
       
    }
    
  // return (
  //   <div className="App">
  //     <NameForm 
  //     handlePropSubmit={this.addName} 
  //     handleChangeProp={this.handleChangeState} 
  //     value={this.state.studentList}
      
  //     />
 
  //     <h3>Your Hogwarts name is: {this.state.studentList}</h3>

  //     <WelcomeList 
  //     nameProp={this.state.hogwartsInfo} 
  //     />
  //   </div>
  // );
   }
}

export default App;
