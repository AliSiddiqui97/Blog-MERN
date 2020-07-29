import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';

import Home from './components/screens/Home'
import Category from './components/screens/Category'
import Single from './components/screens/Single'
import NotFound from './components/screens/Error404'

import FreshStories from './components/parts/FreshStories'
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path = '/'>
        <Home/>
      </Route>
      <Route path = '/category'>
        <Category/>
      </Route>
      <Route path = '/single'>
        <Single/>
      </Route>
      <Route path = '*'>
        <NotFound/>
      </Route>
    </Switch>
      
    </BrowserRouter>
  );
}

export default App;
