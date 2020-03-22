import React, { Component } from 'react';
import './App.css';
import Person from './Person'

class App extends Component {
  state = {
    "persons" : [{
      "name" : "sam",
      "age" : "28"
    }, {
      "name"  : "Shekhar",
      "age" : "27"
    }],
    "otherState"  : "Some Value"
  }

  switchNameHandler = () => {
      console.log("was clicked!!!")
      this.setState({
        persons : [ {
          "name" : this.state.persons[1].name,
          "age" : this.state.persons[1].age
                }, {
          "name"  : this.state.persons[0].name,
          "age" : this.state.persons[0].age
        }]
      })
  }
  render() {
    return (
      <React.Fragment >
        <button onClick={this.switchNameHandler}>Switch Name</button>
       {this.state.persons.map((e, index) => 
       <Person key={index} name={e.name} age={e.age}></Person> 
       )}
       {this.state.otherState}
      </React.Fragment>
    );

    
  }
}

export default App;


// Both of them are equivalent to each other and code  1 jsx will compile and change 
// it into the 2 snippet internally.
// render() {
//   return <div className="App">
//     <h1>Helloooo... Soon i will be the master</h1>
//     <p>I am shekhar and begineer in react</p>
//   </div>
// }

// return React.createElement('div', {className : "App"}, [
//   React.createElement('h1', {}, "Helloooo... Soon i will be the master"),
//   React.createElement('p', {}, "I am shekhar and begineer in react")
//   ]
// )