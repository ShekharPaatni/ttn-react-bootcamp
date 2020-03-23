import React, {Component, Fragment} from 'react';
import styled from 'styled-components'
import Person from './Person'
import './App.css'
// import Radium, {StyleRoot} from 'radium'

const StyledButton = styled.button`
    background-color :${props => props.alt ? 'red' : 'green'};
    color   :   white;
    font : inherit;
    border  :   1px solid blue;
    padding :   8px;
    cursor  :   pointer;

    &:hover  {
        background-color : ${props => props.alt ? 'salmon' : 'lightgreen'};
            color   :   black;
        }
`;


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

        let classes = [];
        let persons = this.state.persons;
        if(persons.length == 2)
            classes.push('red')
        if(persons.length >= 1)
            classes.push('bold')
    
        return (
            <Fragment>
                <p className = {classes.join(" ")}>This will change according to the number of persons in an array</p>
                <StyledButton alt={this.state.showPersons} onClick={this.toggleHandler}>Show Person</StyledButton>
            {personsList}
            </Fragment>
        )
    }
}
export default App;
// export default Radium(App);

// <StyleRoot>
// <Fragment>
//     <p className = {classes.join(" ")}>This will change according to the number of persons in an array</p>
//     <button style={style} onClick={this.toggleHandler}>Show Person</button>
// {personsList}
// </Fragment>
// </StyleRoot>