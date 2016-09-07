/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

// Import stuff
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { LoginFn } from '../actions/AppActions'

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  ini
  render() {
    console.log(this.props.data);
    let login = this.props.data.loggedIn;
 
    console.log(login);

    let loginStr = 'false';
    if(login){
      loginStr= 'true';
    }
    return(
      <div>
          Hello word!!!{loginStr}
      <Button onClick={::this.loginf} className="btn btn-primary">login</Button>
      </div>
      );
    }
   
   loginf(){
      this.props.dispatch(LoginFn(this.props.data.loggedIn));
    }
}

export default App;

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
