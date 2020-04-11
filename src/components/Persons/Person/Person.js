import React, {Component} from 'react';
import '../../../index.css';
import styled from 'styled-components';
import './Person.css';
import Auxiliary from '../../hoc/Auxiliary';
import withClass from '../../hoc/withClass';
import PropTypes from 'prop-types';

// const StyledDiv = 

//     styled.div`
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid white;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;
//     background-color: blue;
  
//     @media (min-width: 1800px){  
//           width: 450px; 
//     }   
//     `
class Person extends Component{
    // componentDidMount executes after render

    constructor(props){
        super(props)
        this.inputElement = React.createRef();
    }

    componentDidMount(){
        this.inputElement.current.focus();
    }




    render(){
console.log('[Person.js] rendering...');
  
   
    //    const style= {'@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

    
    return(
    <Auxiliary>
        {this.props.authen ? <p>Authenticated</p> : <p>Login</p>}
    <h1 key='i1' onClick={this.props.click}>This is {this.props.fname} {this.props.lname}. I am {this.props.age} years old.</h1>
    <h2 key='i2'>{this.props.children}</h2>
    <input 
    key='i3' 
    type="text" 
    value={this.props.fname} 
    onChange={this.props.changed}
    // ref={(inputRef)=>{this.inputElement = inputRef}}
    ref={this.inputElement}
    />   
     {/* tags must be enclosed in other tags */}
     </Auxiliary>
    );
    
}}

// propTypes need to be with lower case p
Person.propTypes = {
    click: PropTypes.func,
    fname: PropTypes.string,
    lname: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, 'Person');