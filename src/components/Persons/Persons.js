import React, {PureComponent} from 'react';
import './Persons.css';
import Person from './Person/Person';

class Persons extends PureComponent{

  // why is it static
// static getDerivedStateFromProps(props, state){
//   console.log('[Persons.js] getDerivedStateFromProps');
//   return state;
// }

// THIS ONE IS REMOVED FROM REACT
// componentWillReceiveProps(props){
// console.log('[Persons.js] componentWillReceiveProps', props)
// }

componentWillUnmount(){
  console.log('[Persons.js] componentWillUnmount');
}


// shouldComponentUpdate(nextProps, nextState){
//   console.log('[Persons.js] shouldComponentUpdate');
//   if(nextProps.person !== this.props.person ||
//      nextProps.deletePersonHandler !== this.props.deletePersonHandler ||
//      nextProps.switchTextHandler !== this.props.switchTextHandler
//     ){
//     return true;
//   }
//   else return false;
// }

getSnapshotBeforeUpdate(prevProps, prevState){
console.log('[Persons.js] getSnapshotBeforeUpdate');
return {message: 'Snapshot!'};
}

// This runs right before componentDidUpdate
// componentWillUpdate(){

// }

componentDidUpdate(prevProps, prevState, snapshot){
  console.log('[Persons.js] componentDidUpdate');
  return snapshot;
}
  render(){
    console.log('[Persons.js] rendering...');

    // couldnot understand return in here
        return (<div className="box">

            {this.props.person.map((per, index) => {
                

              // while executing click={this.deletePersonHandler} I need to know which person I need to delete
              return <Person 
              click={() => this.props.deletePersonHandler(index)} 
              fname={per.fname} 
              lname={per.lname} 
              age={per.age}
              key={per.id}
              authen = {this.props.authen}
              changed={(event)=>this.props.switchTextHandler(event, per.id)}
              />
            })}
            {/* <button onClick={props.switchNameHandler.bind(this, "Maximillian")}>Click Here</button> */}
        </div> )

    

}}

export default Persons;