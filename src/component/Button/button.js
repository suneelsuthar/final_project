import React from "react";
import { MDBBtn } from "mdbreact";

    export default class Button extends React.Component{
        render(){
  return (
      <MDBBtn color="primary" style={this.props.style} onClick={this.props.onClick}>{this.props.children} </MDBBtn>
  );
}}
