import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Feed from './Pages/Feed';
import Post from './Pages/Post';
import Show from './dashboard/show';



const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Feed}/>
            <Route exact path="/Post/:id" component={Post}/>
            <Route exact path="/config/dashboard" component={Show}/>
        </Switch>
    </BrowserRouter>
);
export default Routes;