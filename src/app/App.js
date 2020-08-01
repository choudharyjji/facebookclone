import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import LoginPage from '../auth/LoginPage';
import NavBar from './nav/NavBar';

class App extends React.Component {
    render(){
      return (
        <div style={{ paddingTop: 50 }}>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/login' component={LoginPage} />
          </Switch>
        </div>
      ) 
    }    
}

export default App;
