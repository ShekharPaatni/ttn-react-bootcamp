import React, {Fragment} from 'react';

const person = (props) => <Fragment>
    <p onClick={props.remove}>Hello, I'm {props.name} and I am {props.age} years old.</p>
    <input type="text" onChange={props.changed} value={props.name} />
</Fragment>

export default person;