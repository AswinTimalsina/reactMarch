import React, {Component} from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Auxiliary from '../components/hoc/Auxiliary';
import classes from '../index.css';
import withClass from '../components/hoc/withClass';


class App extends Component{
constructor(props){
  super(props);
  console.log('[App.js] constructor')
}

  state = {
    person:[
      {id: "a1", fname: "Aswin", lname: "Timalsina", age: 23},
      {id: "b1", fname: "Rohan", lname: "Gugliya", age: 42},
      {id: "c1", fname: "Arohan", lname: "Timalsina", age: 39}
    ],
    otherName: "Hola",
    displayFlag: true,
    showCockpit: true
  }


  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentWillMount(){
    console.log('App.js componentWillMount');
  }

  componentDidMount(){
    console.log('App.js componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate')
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
    console.log('[App.js] render');
    let persons = null;
    // handling the components on event
    if(this.state.displayFlag){
      persons = (
       <Persons 
        person={this.state.person}
        deletePersonHandler={this.deletePersonHandler}
        switchTextHandler = {this.switchTextHandler}
        // switchNameHandler={this.switchNameHandler}
        />
      )
    }
return(
  // <div className='center'>
    <Auxiliary>
    <button onClick={() => {this.setState({showCockpit: !this.state.showCockpit})}}>Toggle Cockpit</button>
    {this.state.showCockpit ? <Cockpit 
    personLength={this.state.person.length}
    displayFlag={this.state.displayFlag}
    displayTextHandler = {this.displayTextHandler}
    /> : null} 
    {persons} 
    </Auxiliary>
// </div>
)

  }
}
export default withClass(App, 'Center');

