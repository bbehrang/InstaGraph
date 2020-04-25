import React, {Component} from 'react';

class ModalContent extends Component {

    render() {
        return (
            <>
                {this.props.children}
            </>
        );
    }
}

export default ModalContent;