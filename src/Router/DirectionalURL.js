import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import SignUp from '../component/signUp/signUp';
import SignIn from '../component/signIn/signIn';
import NotFound from '../component/notFound/notFound';
import Chat from '../component/chat/chat';
class DirectionalURL extends Component {
    render() {
        return (
            <Switch>
                <Route path='/SignUp' component={({ match, location})=><SignUp  match={match} location={location} />}/>      
                <Route path="/SignIn" component={({ match, location})=><SignIn  match={match} location={location} />}/>
                <Route path="/Chat" component={({ match, location})=><Chat  match={match} location={location} />}/>
                <Route component={NotFound}/>
            </Switch>
        );
    }
}
export default DirectionalURL;