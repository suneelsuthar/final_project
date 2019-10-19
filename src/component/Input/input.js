import React from "react";
// import { MDBBtn } from "mdbreact";

export default class Input extends React.Component {
    render() {
        return (
            <input onChange={this.props.onChange} placeholder={this.props.placeholder} type={this.props.type} id="example1" style={this.props.style} className="form-control form-control-lg" />
        );
    }
}
