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
  
    const hogwartsInfo = this.state.hogwartsInfo.slice();
    hogwartsInfo.push({nameOfStudent: this.state.studentList, id: 1})
    this.setState({hogwartsInfo, studentList: []})
    

    console.log('name....', this.state.nameOfStudent)
    console.log('hogwarts name....', this.state.hogwartsInfo)
    console.log('student....', this.state.studentList)
    console.log('value...', e.target.value)

  }


  handleChangeState = e => this.setState({ [e.target.name]: e.target.value });

  render(){
   if (this.state.studentList === '1' ) { 
     return (
       <div>
         <NameForm 
      handlePropSubmit={this.addName} 
      handleChangeProp={this.handleChangeState} 
      value={this.state.studentList}
      
      />
 
      <h3>Your Hogwarts name is: {this.state.studentList}</h3>
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

  //     {/* <WelcomeList 
  //     nameProp={this.state.hogwartsInfo} 
  //     /> */}
  //   </div>
  // );
  }
}

export default App;
