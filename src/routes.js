import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Feed from './Pages/Feed';
import Post from './Pages/Post';



const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Feed}/>
            <Route exact path="/Post/:id" component={Post}/>
        </Switch>
    </BrowserRouter>
);
export default Routes;