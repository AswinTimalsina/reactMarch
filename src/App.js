import React, {Component} from 'react';
import logo from './logo.svg';
import Person from './Person/Person'
import './index.css';

function App() {    
    return (
      <div className="box">
        <Person fname="Aswin" lname="Timalsina" age="23" />
        <Person fname="rohan" lname="Timalsina" age="29"> Wassup guys!!! </Person>
        <Person fname="Rudhan" lname="Timalsina" age="23" />
      </div>
  );
}

export default App;
