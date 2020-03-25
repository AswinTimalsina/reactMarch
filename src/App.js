import React, {Component} from 'react';
import logo from './logo.svg';
import Person from './Person/Person'
import './index.css';

class App extends Component {  
  // the state property is only in class; for function you have to use *???*
  state={
    person:[
      {fname: "Aswin", lname: "Timalsina", age: 23},
      {fname: "Rohan", lname: "Gugliya", age: 42},
      {fname: "Arohan", lname: "Timalsina", age: 39}
    ]
  }  
    render(){return (
      <div className="box">
        <Person fname={this.state.person[0].fname} lname={this.state.person[0].lname} age={this.state.person[0].age} />
        <Person fname={this.state.person[1].fname} lname={this.state.person[1].lname} age={this.state.person[1].age}> Wassup guys!!! </Person>
        <Person fname={this.state.person[2].fname} lname={this.state.person[2].lname} age={this.state.person[2].age} />
      </div>
  );}
}

export default App;
