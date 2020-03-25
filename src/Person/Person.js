import React, {Component} from 'react';


 class Person extends Component{
    render(){
    return(<h1>This is {this.props.fname} {this.props.name}. I am {this.props.age} years old.</h1>);
    }
}

export default Person;