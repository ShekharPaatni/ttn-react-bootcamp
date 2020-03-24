import React, {  useEffect } from 'react';

const cockpit = (props) =>  {
    useEffect(() => {
        console.log("[Cockpit.js] calling")
        alert("save to cloud!!!")
        setTimeout(() => {}, 1000);
        //clean up call
        return () => console.log("this will called everytime")
}, [props.appTitle])
//[] this will only call one time or [props.appTitle] this will call whenever change.


//We can wrap all the html element in an array, this is an another way.
return [
  <p key="title">{props.appTitle}</p>,
               <button key="button" onClick={() => props.toggle()}>Show Person</button>
];
}
export default cockpit;