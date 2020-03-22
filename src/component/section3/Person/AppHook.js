import React, {useState} from 'react';
import Person from './Person'
import './App.css'

const app = (props) => {
    const [personState, setPersonState] = useState({
        persons : [{
            "name"  :   "shekhar",
            "age"   : 27
        }, {
            "name"  :   "Sam Paatni",
            "age"   :   28
        }],
        otherState  :   "Some Other Person"
    });

    const [showPersonState, setShowPersonState] = useState ({
        showPersons : false
    })

    let personElements = null;
    if(showPersonState.showPersons) {
        personElements = <div>{personState.persons.map((person, index) => <Person key={index} name={person.name}
        age={person.age} />
        )}</div> 
    }

    const togglePersonsHanler = () => {
        setShowPersonState({
            showPersons : !showPersonState.showPersons
        })
    }
const style  = {
    backgroundColor :   'white',
    border  :   '1px solid blue',
    padding :   '8px',
    cursor  :   'pointer',
    outline : 'none'
}


    return <React.Fragment>
        <button style={style} onClick={togglePersonsHanler}>Switch Name</button>
        {personElements}
    </React.Fragment>;
}

export default app;