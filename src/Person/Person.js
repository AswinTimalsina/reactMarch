import React, {Component} from 'react';
import '../index.css';
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

 class Person extends Component{

  
    render(){
    //    const style= {'@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

    
    return(
    <StyledDiv>
    <h1 onClick={this.props.click}>This is {this.props.fname} {this.props.lname}. I am {this.props.age} years old.</h1>
    <h2>{this.props.children}</h2> 
    <input  type="text" value={this.props.fname} onChange={this.props.changed}/>   
    {/* tags must be enclosed in other tags */}
    </StyledDiv>
        );
    }
}

export default Person;