import React, {useState} from 'react';
import logo from './logo.svg';
import Person from './Person/Person'
import './index.css';

const App = props => { 
  const [personState, setPersonState] = useState({
    person:[
      {fname: "Aswin", lname: "Timalsina", age: 23},
      {fname: "Rohan", lname: "Gugliya", age: 42},
      {fname: "Arohan", lname: "Timalsina", age: 39}
    ]
    // otherName: "Hola"
    // after the state change, otherName gets removed; it means state is replaced not overridden
  });

  // Best way is to create another useState with the value that should not be replaced
  const [setOtherState, setOtherPersonState] = useState({
    otherName: "Hola"
  })

  const switchNameHandler = ()=>{
    console.log("Button is clicked");
    //DONOT USE THIS: this.state.person[0].fname = "Austin";
    setPersonState({
      person:[
      {fname: "Austin", lname: "Williams", age: 29},
      {fname: "Shukhais", lname: "Gugliya", age: 69},
      {fname: "Adam", lname: "Major", age: 88}
      ]
    })
  }


 return (
      <div className="box">
        <Person fname={personState.person[0].fname} lname={personState.person[0].lname} age={personState.person[0].age} />
        <Person fname={personState.person[1].fname} lname={personState.person[1].lname} age={personState.person[1].age}> Wassup guys!!! </Person>
        <Person fname={personState.person[2].fname} lname={personState.person[2].lname} age={personState.person[2].age} />
        <button onClick={switchNameHandler}>Switch</button>
        <p>{setOtherState.otherName} {personState.person[0].fname} {personState.person[0].lname}!</p>
      </div>
  );
}

export default App;

