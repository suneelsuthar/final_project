import React from 'react';
import logo from './logo.svg';
import './App.css';
import Basic from './Config/Router/Router.js'
import {Provider} from 'react-redux'
import store from '../src/store'

class App extends React.Component{
render(){
  return(
      <Provider store={store}>
      <Basic/>
      </Provider>
  )
}
}
export default App;
