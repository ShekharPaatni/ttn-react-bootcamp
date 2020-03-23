import React, {Component, Fragment} from 'react';

class ValidationComponent extends Component {

    render() {
        return <Fragment>
        {
            this.props.length >=5 ? <p>Text long enough</p>
            : <p>Text too short</p>
        }

        </Fragment>
    }
}

export default ValidationComponent;