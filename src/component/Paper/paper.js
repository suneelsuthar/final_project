import React from 'react';
import Paper from '@material-ui/core/Paper';


  export default class PaperSheet extends React.Component{
    render(){

  return (
    <div>
      <Paper>
        {this.props.children}
      </Paper>
    </div>
  );
}}