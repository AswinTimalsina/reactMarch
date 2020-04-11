import React, {useEffect, useRef} from 'react';
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
const toggleButtonRef = useRef(null);
useEffect(()=>{
  console.log('[Cockpit.js useEffect]')
  // const timer = setTimeout(()=>{
  toggleButtonRef.current.click();
  //   alert('Saved data to cloud');
  // }, 1000);
  // the return code only runs when the component is unmounted or rendered for the first time
  return () => {
    // clearTimeout(timer);
    console.log('[Cockpit.js] cleanup work in useEffect')
  }
}, [])

useEffect(()=>{
  console.log('[Cockpit.js] 2nd useEffect]')
  return () => {
    console.log('[Cockpit.js] cleanup work in 2nd useEffect')
  }})

    let classes = [];

    if(props.personLength <= 2){
      classes.push('red');
    }

    if(props.personLength <= 1){
      classes.push('bold');
    }


    return(
        <div>
        <h1>Hi, I'm a React App</h1>
    <h1 className={classes.join(' ')}>This is really working</h1>
    <StyledButton 
    alt={props.displayFlag} 
    ref={toggleButtonRef}
    onClick={props.displayTextHandler}>Disappear</StyledButton>
    </div>
    )
}

export default React.memo(Cockpit);