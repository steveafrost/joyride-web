import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </Switch>
);
