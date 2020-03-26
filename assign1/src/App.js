import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

function App() {
  const [usernameState, setUsernameState] = useState({
    username: "Aswin Timalsina"
  })

 const usernameEventHandler = (name) =>{
  setUsernameState({
    username: name.target.value
  })
  }

  return (
    <div> 
      <UserInput username= {usernameState.username} changed={usernameEventHandler}/>
      <UserOutput click={usernameEventHandler} username={usernameState.username}/>
      <UserOutput />
    </div>
  );
}

export default App;
