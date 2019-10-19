import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


export default function CenteredGrid(props) {

  return (
    <div>
      <Grid container justify="center">
        <Grid item xl={props.xs} lg={props.lg} sm={props.lg} md={props.md} xs={props.xs}>
          {props.children}
        </Grid>
      </Grid>
    </div>
  );
}