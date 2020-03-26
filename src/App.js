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

  // NOT CALLING IT ANYWHERE ANYTIME IN THIS APPLICATION
  // switchTextHandler = (name1) =>{
  //   this.setState({person:[
  //     {fname: "Austin", lname: "Williams", age: 29},
  //     {fname: name1.target.value, lname: "Gugliya", age: 69},
  //     {fname: "Sudhais", lname: "Major", age: 88}
  //   ]})
  // }
  
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
      cursor: 'pointer'
    };

    let persons = null;
    // handling the components on event
    if(this.state.displayFlag){
      persons = (
        <div className="box">

            {this.state.person.map((per, index) => {

              // while executing click={this.deletePersonHandler} I need to know which person I need to delete
              return <Person click={() => this.deletePersonHandler(index)} fname={per.fname} lname={per.lname} age={per.age}/>
            })}
            {/* 
            This one works by the abovse method
            <Person fname={this.state.person[0].fname} lname={this.state.person[0].lname} age={this.state.person[0].age}/>
            
            This one has some attribs which is not handled by above method
            <Person changed={this.switchTextHandler} click={this.switchNameHandler.bind(this, "Austin")} fname={this.state.person[1].fname} lname={this.state.person[1].lname} age={this.state.person[1].age}>Wassup guys!!!</Person>

            This one works by the above method
            <Person fname={this.state.person[2].fname} lname={this.state.person[2].lname} age={this.state.person[2].age}/> */}


            <button style={style} onClick={this.switchNameHandler.bind(this, "Maximillian")}>Click Here</button>
            {/* <p>{this.state.otherName} {this.state.person[0].fname} {this.state.person[0].lname}!</p> */}
        </div> 
      )
    }


return(
  <div>
    <button onClick={this.displayTextHandler}>Disappear</button>
    {persons} 
</div>

)

  }
}
export default App;

