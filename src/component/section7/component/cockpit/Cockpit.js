import React, {  useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/AuthContext'

const cockpit = (props) =>  {
  const toggleButtonRef = useRef(null);
  const context = useContext(AuthContext)

    useEffect(() => {
        console.log("[Cockpit.js] calling")
        toggleButtonRef.current.click()

        setTimeout(() => {}, 1000);
        //clean up call
        return () =>         toggleButtonRef.current.click()

}, [])
//[] this will only call one time or [props.appTitle] this will call whenever change.


//We can wrap all the html element in an array, this is an another way.
return [
  <p key="title">{props.appTitle}</p>,
    <button key="button1" onClick={context.login}>Login</button>,
               <button ref={toggleButtonRef} key="button" onClick={() => props.toggle()}>Show Person</button>
];
}
export default cockpit;