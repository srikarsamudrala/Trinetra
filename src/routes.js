import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Instructions from './components/Instructions/Instructions';
import Download from './components/Download/Download';


import {Route, Switch, Redirect} from 'react-router-dom';

var Routes = function() {
    return (
        <div>
            <Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/"><Redirect to="/Home" /></Route>
                <Route exact path="/About" component={About} />
                <Route exact path="/Instructions" component={Instructions} />
                <Route exact path="/Download" component={Download} />
            </Switch>
        </div>
    );
}

export default Routes;