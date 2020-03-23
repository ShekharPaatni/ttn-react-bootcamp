import React, {Component, Fragment} from 'react';
import Person from './Person'

class App extends Component {
    state = {
        persons : [{
            name: "Sam Paatni",
            age : 28
        }, {
            name : "Vikash Tiwari",
            age: 29
        }],
        showPersons : false
    }
    toggleHandler = () => {
        this.setState({showPersons : !this.state.showPersons});
    }
    deletePersonHandler = (index) => {
        let persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons :  persons})
    }

    nameChangeHandler = (event, index) => {
        const persons = [...this.state.persons];
        const person = persons.slice(index, 1);
        person.name = event.target.value;
        persons[index] = person;
        this.setState({persons : persons})
    }
    render() {
        let personsList = null;
        if (this.state.showPersons) {
            personsList = this.state.persons.map((person, index) => 
            <Person 
            key={index} 
            name={person.name} 
            age={person.age} 
            remove={() => this.deletePersonHandler(index)}
            changed={(event) => this.nameChangeHandler(event, index)} />
            )
        }
        return <Fragment>
            <button onClick={this.toggleHandler}>Show Person</button>
           {personsList}
        </Fragment>
    }
}
export default App;