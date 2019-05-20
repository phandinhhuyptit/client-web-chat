import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authAction  from './Actions/auth';
import SignIn from './component/signIn/signIn';
import SignUp from './component/signUp/signUp';

class App extends Component {

  componentDidMount = () => {
    this.props.onHandleGettUsers();
  }
  render() {
    return (
      <div>
        {/* <SignIn></SignIn> */}
        <SignUp/>
      </div>
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


