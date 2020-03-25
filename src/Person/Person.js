import React, {Component} from 'react';


 class Person extends Component{
    render(){
    return(
        <div>
    <h1 onClick={this.props.click}>This is {this.props.fname} {this.props.lname}. I am {this.props.age} years old.</h1>
    <h2>{this.props.children}</h2>    
    {/* tags must be enclosed in other tags */}
    </div>
        );
    }
}

export default Person;