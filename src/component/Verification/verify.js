import React from 'react';
import Navbar from './../index'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { MdVerifiedUser } from "react-icons/md";
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { stat } from 'fs';

 function emailVerify(props) {
    console.log(props.activeUser)
    return (
        <div>
            <Navbar />




            <br />
            <br />
            <br />
            <Grid item lg={12} xs={12} md={12}>
                <Grid container justify="center" lg={12}>

                    <Paper style={{ width: "40%", textAlign: "center", marginTop: "10%", padding: "20px" }}>
                        <MdVerifiedUser style={{ fontSize: "80px", color: "green" }} />
                        <Typography style={{ fontSize: "20px", paddingTop: "20px" }}>Verify your email to proceed</Typography>

                        <Typography style={{ color: "grey", paddingTop: "20px" }}>
                            We just sent an email to the address: ljklj@gmail.com
                            Please check your email and click on the link provided to verify your address
                        </Typography>

                        <Button variant="contained" style={{ width: "60%", padding: "10px", backgroundColor: "rgb(73, 198, 109)", color: "white" }}>RESND YOUR EMAIL ADDRESS</Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}


const mapStateToProps = state => {
    console.log(state)
    return {
        currentuser: state
    }
  }
//   const mapDispatchToProps = dispatch => {
//     return {
//         login: (data,history) => dispatch(login(data,history)),
//     }
//   }
  export default connect(mapStateToProps, null)(emailVerify)