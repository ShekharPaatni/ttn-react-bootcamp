import React from 'react'

const functionalComponent = (WrapComponent, classes) => {
    return props => (
        <div className={classes}>
            <WrapComponent appTitle="Person Management System"/>
        </div>
    );
}

export default functionalComponent;