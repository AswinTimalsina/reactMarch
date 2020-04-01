import React from 'react';
import './Persons.css';
import Person from './Person/Person';

const Persons = (props) => {
    return(
        <div className="box">

            {props.person.map((per, index) => {

              // while executing click={this.deletePersonHandler} I need to know which person I need to delete
              return <Person 
              click={() => props.deletePersonHandler(index)} 
              fname={per.fname} 
              lname={per.lname} 
              age={per.age}
              key={per.id}
              
              changed={(event)=>props.switchTextHandler(event, per.id)}
              />
            })}
            {/* <button onClick={props.switchNameHandler.bind(this, "Maximillian")}>Click Here</button> */}
        </div> 

    )

}

export default Persons;