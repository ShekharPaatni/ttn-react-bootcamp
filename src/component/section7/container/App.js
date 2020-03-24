import React, {Component} from 'react'
import Persons from '../component/Persons/Persons'
import Cockpit from '../component/cockpit/Cockpit'
import classes from './App.css'
import Aux from '../hoc/Auxilary/Auxilary'
import WithClass from '../hoc/Auxilary/WithClass'

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
        }],
        showPersons : false,
        showCockpit :    true
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
    toggleHandler = () => {
        this.setState({showPersons : !this.state.showPersons});
    }

    render() {
        console.log("Render method called !!!")
        let persons = null;
        if(this.state.showPersons) {
           persons = <Persons persons={this.state.persons} remove={this.deletePersonHandler} />
        }
        return <Aux>
            <WithClass classes={classes.App}>
                <button onClick={() => this.setState({showCockpit : !this.state.showCockpit})}>Show Cockpit</button>
               { this.state.showCockpit  ?
                <Cockpit  appTitle={this.props.appTitle} toggle={this.toggleHandler}/>
                    : null }
                {persons}
            </WithClass>
        </Aux>
    }
}

export default functionalComponentHOC(App, classes.Black);