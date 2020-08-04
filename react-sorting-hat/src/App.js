import React from 'react';
import WelcomeList from './components/WelcomeList';
import NameForm from  "./components/Name";
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
      studentList: []
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
        <WelcomeList 
        nameProp={this.state.hogwartsInfo} 
        /> 
      </div>
     ) } else {
       return (
         <div>
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
