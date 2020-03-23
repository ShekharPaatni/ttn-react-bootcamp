import React, {Component, Fragment} from 'react';
import ValidationComponent from './ValidationComponent'
import CharComponent from './CharComponent'
class App extends Component {

    state = {
        inputText:'',
        length : 0
    }

    textCountHandler = (event) => {
        let inputText = event.target.value;
        let count = inputText.length;
        this.setState({length : count, inputText : inputText})
    }

    deleteCharComponentHandler = (index) => {
        let inputText = this.state.inputText.split("");
        inputText.splice(index, 1);
        this.setState({inputText : inputText.join("")})
        
    }
    render() {
    let input = this.state.inputText.split("").map((char, index) =>
    <CharComponent text={char} key={index} remove={() =>this.deleteCharComponentHandler(index)}/> )

        return <Fragment>
            <input type="text" onChange={this.textCountHandler} />
            <p>Length of text is :- {this.state.length}</p>

            <ValidationComponent length={this.state.length} />
            {input}
        </Fragment>
    }
}

export default App;