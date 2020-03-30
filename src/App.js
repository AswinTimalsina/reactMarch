import React, {Component} from 'react';
import logo from './logo.svg';
import Person from './Person/Person'
import './index.css';
import Radium, {StyleRoot} from 'radium';

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
    const style={
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'blue'
      }
    };

    let persons = null;
    // handling the components on event
    if(this.state.displayFlag){
      persons = (
        <div className="box">

            {this.state.person.map((per, index) => {

              // while executing click={this.deletePersonHandler} I need to know which person I need to delete
              return <Person 
              click={() => this.deletePersonHandler(index)} 
              fname={per.fname} 
              lname={per.lname} 
              age={per.age}
              key={per.id}
              changed={(event)=>this.switchTextHandler(event, per.id)}
              style={style}
              />
            })}
            <button onClick={this.switchNameHandler.bind(this, "Maximillian")}>Click Here</button>
        </div> 
      )
            style.backgroundColor = 'red';
            style[':hover'] = {
              backgroundColor: 'yellow',
              color: 'black'
            }


    }

    let classes = [];

    if(this.state.person.length <= 2){
      classes.push('red');
    }

    if(this.state.person.length <= 1){
      classes.push('bold');
    }

return(
  <StyleRoot>
  <div className='center'>
    <h1>Hi, I'm a React App</h1>
    <h1 className={classes.join(' ')}>This is really working</h1>
    <button style={style} onClick={this.displayTextHandler}>Disappear</button>
    {persons} 
</div>
</StyleRoot>
)

  }
}
export default Radium(App);

