import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authAction  from './Actions/auth';
import { BrowserRouter as Router} from "react-router-dom";
import  DirectionalURL   from './Router/DirectionalURL';

class App extends Component {

  componentDidMount = () => {
    this.props.onHandleGettUsers();
  }
  render() {    

    return (
      <Router>
          <DirectionalURL/>        
      </Router>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {

  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onHandleGettUsers: () => {
      dispatch(authAction.handleGettUsers())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)


