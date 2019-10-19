import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import Loader from 'react-loader-spinner'
 export default class SpinnerLoader extends React.Component {
    render() {
     return(
      <Loader
         type={this.props.type}
         color="#00BFFF"
         height={70}
         width={70}
         style={{textAlign:"center"}}
         timeout={3000} //3 secs
      />
     );
    }
 }