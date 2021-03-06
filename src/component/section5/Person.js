import React, {Fragment} from 'react';
// import Radium from 'radium';
import './Person.css'
import styled from 'styled-components'

const StyleDiv = styled.div`
width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    @media(min-width :500px) : {
        width : '450px';
    }
`;

const person = (props) => <StyleDiv>
    <p onClick={props.remove}>Hello, I'm {props.name} and I am {props.age} years old.</p>
    <input type="text" onChange={props.changed} value={props.name} />
    </StyleDiv>
export default person;

// This is using Radium library
// export default Radium(person);

// (<div className="Person" style={style}>
//     <p onClick={props.remove}>Hello, I'm {props.name} and I am {props.age} years old.</p>
//     <input type="text" onChange={props.changed} value={props.name} />
// </div>)
// const style = {
    // '@media(min-width :500px)' : {
    //     width : '450px'
    // }
// }
// const style = {

// }