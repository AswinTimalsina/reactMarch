import React, {Component} from 'react';
import logo from './logo.svg';
import Person from './Person/Person'
import './index.css';

class App extends Component{
  state = {
    person:[
      {fname: "Aswin", lname: "Timalsina", age: 23},
      {fname: "Rohan", lname: "Gugliya", age: 42},
      {fname: "Arohan", lname: "Timalsina", age: 39}
    ],
    otherName: "Hola"
  }

  switchNameHandler = (name) =>{
    console.log("Button clicked");
    this.setState({
      person:[
      {fname: "Austin", lname: "Williams", age: 29},
      {fname: "Shukhais", lname: "Gugliya", age: 69},
      {fname: name, lname: "Major", age: 88}
      ]
    })
  }
  
  
  render(){
return(
  <div className="box">
<Person fname={this.state.person[0].fname} lname={this.state.person[0].lname} age={this.state.person[0].age}/>
<Person click={this.switchNameHandler.bind(this, "Austin")} fname={this.state.person[1].fname} lname={this.state.person[1].lname} age={this.state.person[1].age}>Wassup guys!!!</Person>
<Person fname={this.state.person[2].fname} lname={this.state.person[2].lname} age={this.state.person[2].age}/>
<button onClick={this.switchNameHandler.bind(this, "Maximillian")}>Click Here</button>
<p>{this.state.otherName} {this.state.person[0].fname} {this.state.person[0].lname}!</p>
</div>
)

  }
}
export default App;

