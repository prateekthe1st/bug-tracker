import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFoundPage from './essentials/NotFoundPage';

import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import TeamJoin from './pages/TeamJoin';
import TeamCreate from './pages/TeamCreate';
import Tracker from './pages/Tracker';

const App = () => {
    //All routes that can render
    return (
        <>
            <Router>
                <Switch>
                    <Route path = '/' exact component = { LandingPage } /> 
                    <Route path = '/dashboard' exact component = { Dashboard } />
                    <Route path = '/signup' exact component = { Signup } />
                    <Route path = '/login' exact component = { Login } />
                    <Route path = '/team/join' exact component = { TeamJoin } />
                    <Route path = '/team/create' exact component = { TeamCreate } />
                    <Route path = '/tracker' exact component = { Tracker } />
                    <Route component = { NotFoundPage } />
                </Switch>
            </Router>
        </>
    )
}

export default App;


