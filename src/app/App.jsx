import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Amplify from 'aws-amplify';
import { AmplifyTheme, RequireNewPassword, VerifyContact, Authenticator } from 'aws-amplify-react';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import ConfirmSignUp from './auth/ConfirmSignUp';
import ForgotPassword from './auth/ForgotPassword';
import awsExports from './aws-exports';

import withTracker from './withTracker';
import MapView from './mapView/MapView';
import Form from './form/Form';
import Recap from './recap/Recap';
import LocationInfo from './locationInfo/LocationInfo';
import LocationForm from './locationForm/LocationForm';
import { store, history } from '../store/index';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'


import './App.css';

Amplify.configure(awsExports);

class App extends Component {
  render() {
    if (this.props.authState !== 'signedIn') return null;
    return (
      <Provider store={store}>
        <div className="App">
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/" component={withTracker(MapView)} />
              <Route path="/form" component={withTracker(Form)} />
              <Route path="/recap/:locationId" component={withTracker(Recap)} />
              <Route path="/location/:locationId" component={withTracker(LocationInfo)} />
              <Route path="/questions/:id" component={withTracker(LocationForm)} />
            </Switch>
          </ConnectedRouter>
        </div>
      </Provider>
    );
  }
}

AmplifyTheme.container.paddingRight = AmplifyTheme.container.paddingLeft = 0;

const auth = () => (
  <Authenticator hideDefault theme={AmplifyTheme}>
    <SignIn />
    <ForgotPassword />
    <RequireNewPassword />
    <SignUp />
    <ConfirmSignUp />
    <VerifyContact />
    <App />
  </Authenticator>
);



export default auth;
