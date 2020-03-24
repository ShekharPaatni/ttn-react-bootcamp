import React from 'react'

const functionalComponent = (WrapComponent, classes) => {
    return props => (
        <div className={classes}>
            <WrapComponent {...props}/>
        </div>
    );
};

export default functionalComponent;