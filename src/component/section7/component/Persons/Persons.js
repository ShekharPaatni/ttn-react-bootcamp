import React, { Fragment, Component } from 'react'
import Person from './Person/Person'
import AuthContext from '../../context/AuthContext'
class Persons extends Component {

    //This is an approach to use the context in lifecycle
    static contextType = AuthContext;

    componentDidMount() {
        console.log(this.context.isAuthenticate)
    }

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
            click = {() => this.props.remove(index)}
            changed = {(event) => this.props.changed(event, index)} />)}
        </Fragment>)
    }
}
export default Persons;