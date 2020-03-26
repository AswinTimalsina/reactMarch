import React, {Component} from 'react';


class UserInput extends Component{
render(){
    return(
        <input type="text" value={this.props.username} onChange={this.props.changed}></input>
    )
}
}

export default UserInput;