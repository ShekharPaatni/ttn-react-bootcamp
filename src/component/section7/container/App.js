import React, {Component} from 'react'
import Persons from '../component/Persons/Persons'
import Cockpit from '../component/cockpit/Cockpit'
import classes from './App.module.css'
import Aux from '../hoc/Auxilary/Auxilary'
import AuthContext from '../context/AuthContext'

import functionalComponentHOC from '../hoc/Auxilary/functionalComponentHOC'

class App extends Component {

    constructor(props) {
        super(props);
        console.log("Constructor called!!")
    }
    state = {
        persons : [ {
            name : "Shekhar Paatni",
            age   : 28
        }, {
            name : "vikash tiwari",
            age   : 29
        }, {
            name : "Deepika",
            age   : 27
        }],
        showPersons : false,
        showCockpit :    true,
        counter : 0,
        isAuthenticate : false
    }
    static getDerivedStateFromProps(nextProps, prevState){
        console.log("get derived state from props called!!")
        return null;
    }

    
    componentDidMount() {
        console.log("component did mount called!!")
    }

    deletePersonHandler = (index) => {
        let persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({persons :  persons})
    }

    counterHandler = () => {
        this.setState((prevState, props) =>{
        return {
            counter : prevState.counter +1
        };
    })
    }

    nameChangeHandler = (event, index) => {
        const persons = [...this.state.persons];
        const person = persons.slice(index, 1);
        person.name = event.target.value;
        persons[index] = person;
        this.setState({persons : persons})
    }

    toggleHandler = () => {
        this.setState({showPersons : !this.state.showPersons});
    }

    authHandler = () => this.setState((prevState, props) => this.setState({isAuthenticate: !prevState.isAuthenticate}));

    render() {
        console.log("Render method called !!!")
        let persons = null;
        if(this.state.showPersons) {
           persons = <Persons persons={this.state.persons} 
           remove={this.deletePersonHandler} changed={this.nameChangeHandler}/>
        }
        return <Aux>
            <button onClick={this.counterHandler}>Counter</button>
                <button onClick={() => this.setState({showCockpit : !this.state.showCockpit})}>Show Cockpit</button>
               <AuthContext.Provider value ={{isAuthenticate: this.state.isAuthenticate, login : this.authHandler}}>
               { this.state.showCockpit  ?
                <Cockpit  appTitle={this.props.appTitle} toggle={this.toggleHandler}/>
                    : null }
                {persons}
                </AuthContext.Provider>
        </Aux>
    }
}

export default functionalComponentHOC(App, [classes.Black, classes.App].join(' '));