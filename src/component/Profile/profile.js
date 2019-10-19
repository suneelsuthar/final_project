import React from 'react'
import {MainNavbar} from './../index'
import {Location} from './../index'
export default class Profile extends React.Component{
   
    render(){
        return(
            <div>
                <MainNavbar />
                <h1>


                Profile page
                </h1>
                <Location />
            </div>
        )
    }
}