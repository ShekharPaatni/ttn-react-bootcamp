import React, {Component} from 'react';
import UserInput from './UserInput';
import './UserOutput.css';
class UserOutput extends Component {
    render() {
        return <React.Fragment>
            <p>I am {this.props.username}</p>
            <p>Mostly you’ll find yourself in casual situations where there isn’t any pressure to respond professionally.</p>
            <UserInput change={this.props.change} value={this.props.username}/>
        </React.Fragment>;
    }
}

export default UserOutput;