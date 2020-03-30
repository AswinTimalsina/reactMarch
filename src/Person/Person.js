import React, {Component} from 'react';
import '../index.css';
import Radium from 'radium';


 class Person extends Component{
    render(){
       const style= {'@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return(
    <div className='Person' style={style}>
    <h1 onClick={this.props.click}>This is {this.props.fname} {this.props.lname}. I am {this.props.age} years old.</h1>
    <h2>{this.props.children}</h2> 
    <input  type="text" value={this.props.fname} onChange={this.props.changed}/>   
    {/* tags must be enclosed in other tags */}
    </div>
        );
    }
}

export default Radium(Person);