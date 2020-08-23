import React, { Component, lazy, Suspense } from 'react';
import './styles.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

const Student = withRouter(lazy(() => import('./components/student/Student')));
const VersionManagement = withRouter(lazy(() => import('./components/version-management/version-management')));

class App extends Component {
  render() {
    return (
     
        <div className="section columns">
      
          <main className="column">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Redirect from="/" exact to="/versionManagement" /> 
                <Route path="/student" component={Student} />  
                <Route path="/versionManagement" component={VersionManagement} />            
              </Switch>
            </Suspense>
          </main>
        </div>
    );
  }
}

export default App;
