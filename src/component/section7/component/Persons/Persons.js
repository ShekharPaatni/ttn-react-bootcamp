import React, { Fragment, Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.persons!== nextProps.persons)
            return true;
    
        console.log("[Persons.js] should component update call!!")
        return false;
    }
    render() {
        console.log("Persons Rendering ...")
        return(<Fragment>
            {this.props.persons.map((person, index) => 
            <Person key={index} 
            name={person.name} 
            age={person.age}
            click = {() => this.props.remove(index)} />)}
        </Fragment>)
    }
}
export default Persons;