import React, {Component} from 'react';
import UserOutput from './UserOutput';

class App extends Component {
    state = {
        nameList : [
            {
                username : "Shekhar"
            }, {
                username : "Vikash"
            }
        ]
    }

    nameChangeHandler = (event, index) => {
        let nameList = [...this.state.nameList];
        nameList[index].username=event.target.value;
        this.setState({nameList : nameList});   
    }
    render() {
        return <React.Fragment>
           {this.state.nameList.map((name, index) => 
           <UserOutput username={name.username} key={index} change={(event) => this.nameChangeHandler(event, index)}/>)}
        </React.Fragment>
    }
}

export default App;