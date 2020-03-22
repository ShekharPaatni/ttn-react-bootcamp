import React, {Component} from 'react';

class UserInput extends Component {

    render() {
        const style  = {
            backgroundColor :   'white',
            border  :   '1px solid blue',
            padding :   '8px',
            cursor  :   'pointer',
            outline : 'none',
            align   :   "center"
        }
        return <div style ={{textAlign: 'center'}}><input style={style} type="text" onChange={this.props.change} value={this.props.value}/></div>;
    }
}

export default UserInput;