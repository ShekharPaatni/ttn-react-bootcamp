import React, {Fragment} from 'react';


const person = (props) => {

    const random = Math.random();
    if(random > 0.7)
        throw new Error("Something went wrong")
    return (
        <div>
            <p onClick={props.remove}>Hello, I'm {props.name} and I am {props.age} years old.</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )}
export default person;
