import React, { Fragment, Component } from 'react'

class Person extends Component {
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("[Person.js] getDerivedStateFromProps");
        return null;
    }

    shouldComponentUpdate (nextProps, nextState) {
        console.log("[Person.js] shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Person.js] getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("[Person.js] componentDidUpdate")
    }
    render() {
        console.log("[Person.js] Person rendering ...")
        return (<Fragment>
        <p onClick={this.props.click}>Hi I'm {this.props.name} and 
        I am {this.props.age} years old.</p>
    </Fragment>);
    }
}
export default Person;