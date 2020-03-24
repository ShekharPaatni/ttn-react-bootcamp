import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types';
import AuthContext from '../../../context/AuthContext'
import classes from '../Person/Person.module.css'
import functionalComponentHOC from '../../../hoc/Auxilary/functionalComponentHOC'
class Person extends Component {
    //another way of using ref
    constructor(props) {
        super(props)
        this.inputEle = React.createRef();
    }
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log("[Person.js] getDerivedStateFromProps");
    //     return null;
    // }

    // shouldComponentUpdate (nextProps, nextState) {
    //     console.log("[Person.js] shouldComponentUpdate");
    //     return true;
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log("[Person.js] getSnapshotBeforeUpdate");
    //     return null;
    // }

    componentDidMount() {
        // this.inputEle.focus()
        this.inputEle.current.focus()
    }
    render() {
        return (<Fragment>
        <AuthContext.Consumer>
            {(context) => context.isAuthenticate ?
             <p>You are authenticated</p>
            : <p>Please logged in</p>}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>Hi I'm {this.props.name} and 
        I am {this.props.age} years old.</p>
        <input 
        type="text" 
        value={this.props.name} 
        onChange={this.props.changed}
        // ref={(inputEle) => {this.inputEle = inputEle}} 
        ref ={this.inputEle}
        />

    </Fragment>);
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
  };
  
export default functionalComponentHOC(Person, classes.Person);