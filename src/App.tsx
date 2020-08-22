import React, { Component, lazy, Suspense } from 'react';
import './styles.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import VersionManagement from './components/version-management/versionManagement';

const Student = withRouter(lazy(() => import('./components/student/Student')));
const TermsAndConditions = withRouter(lazy(() => import('./components/version-management/termsAndConditions')));
const PrivacyPolicy =  withRouter(lazy(() => import('./components/version-management/privacyPolicy')));

class App extends Component {
  render() {
    return (
     
        <div className="section columns">
      
          <main className="column">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Redirect from="/" exact to="/versionManagement" /> 
                <Route path="/student" component={Student} />  
                <Route path="/termsAndConditions" component={TermsAndConditions} />  
                <Route path="/privacyPolicy" component={PrivacyPolicy} />  
                <Route path="/versionManagement" component={VersionManagement} />  

                
              </Switch>
            </Suspense>
          </main>
        </div>
    );
  }
}

export default App;