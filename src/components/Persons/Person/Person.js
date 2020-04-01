import React, {Component} from 'react';
import '../../../index.css';
import styled from 'styled-components';


const StyledDiv = 

    styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid white;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    background-color: blue;
  
    @media (min-width: 1800px){  
          width: 450px; 
    }   
    `

 const Person = (props) =>{

  
   
    //    const style= {'@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

    
    return(
    <StyledDiv>
    <h1 onClick={props.click}>This is {props.fname} {props.lname}. I am {props.age} years old.</h1>
    <h2>{props.children}</h2> 
    <input  type="text" value={props.fname} onChange={props.changed}/>   
    {/* tags must be enclosed in other tags */}
    </StyledDiv>
        );
    
}

export default Person;