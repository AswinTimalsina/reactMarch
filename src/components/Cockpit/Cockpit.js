import React, {useEffect} from 'react';
import './Cockpit.css';
import styled from 'styled-components';

// LOOK AT THIS CONST
const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'red' : 'green'};
      color: white;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;
    
      &:hover { 
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black
      }
`;


const Cockpit = (props) => {
useEffect(()=>{
  console.log('[Cockpit.js useEffect]')
})

    let classes = [];

    if(props.person.length <= 2){
      classes.push('red');
    }

    if(props.person.length <= 1){
      classes.push('bold');
    }


    return(
        <div>
        <h1>Hi, I'm a React App</h1>
    <h1 className={classes.join(' ')}>This is really working</h1>
    <StyledButton alt={props.displayFlag} onClick={props.displayTextHandler}>Disappear</StyledButton>
    </div>
    )
}

export default Cockpit;