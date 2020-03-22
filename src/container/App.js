import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment >
       <p className="App">Hello world</p> 
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