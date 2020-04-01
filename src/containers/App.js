import React, {Component} from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';


class App extends Component{
  state = {
    person:[
      {id: "a1", fname: "Aswin", lname: "Timalsina", age: 23},
      {id: "b1", fname: "Rohan", lname: "Gugliya", age: 42},
      {id: "c1", fname: "Arohan", lname: "Timalsina", age: 39}
    ],
    otherName: "Hola",
    displayFlag: true
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

  switchTextHandler = (event, id) =>{
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });
    //we are making the copy of the targeted person
    const personTargetedCopy = {
      ...this.state.person[personIndex]
    }; 
    //making change in the xerox of targeted person
    personTargetedCopy.fname = event.target.value;

    //making the copy of whole person array
    const personCopy = [...this.state.person];

    //changing the targeted person in the copied array
    personCopy[personIndex] = personTargetedCopy;

    this.setState({
        person: personCopy
    })
  }
   
  displayTextHandler = () =>{
    const displayFlag1 = this.state.displayFlag;
    this.setState({displayFlag: (!displayFlag1)})
  }

  deletePersonHandler =(personIndex) => {
    // const persons = this.state.person; We should not be changing the original array
    //either const persons = this.state.person.slice();
    //or
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({person : persons});
  }
  
  render(){
    let persons = null;
    // handling the components on event
    if(this.state.displayFlag){
      persons = (
        <ErrorBoundary><Persons 
        person={this.state.person}
        deletePersonHandler={this.deletePersonHandler}
        switchTextHandler = {this.switchTextHandler}
        // switchNameHandler={this.switchNameHandler}
        /></ErrorBoundary>
      )
    }

    
return(
  <div className='center'>
    <Cockpit 
    person={this.state.person}
    displayFlag={this.state.displayFlag}
    displayTextHandler = {this.displayTextHandler}
    />
    {persons} 
</div>
)

  }
}
export default App;

