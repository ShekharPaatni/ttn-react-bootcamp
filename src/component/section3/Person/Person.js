import React from 'react';
import './Person.css'
const Person = (props) => <div className="Person App">
    Hi I'm {props.name} and I am {props.age} year's old!
    <p>{props.children}</p>
</div>;

export default Person;