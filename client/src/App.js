import React from 'react';
import './App.css';

//MAIN INNER COMPONENTS
import TopNavbar from './components/TopNavbar'

// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Link is your replacement for anchor tags.
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

// IMPORT COMPONENTS
import Home from './components/Home'
//CATERGORIES
import Processors from './components/NavComponents/Categories/Processors'
import GraphicCards from './components/NavComponents/Categories/GraphicCards'
//ACCOUNT
import Profile from './components/NavComponents/AccountPage/Profile'
import Settings from './components/NavComponents/AccountPage/Settings'
//PRODUCTS
import Products from './components/NavComponents/Products'
//INFORMATION
import About from './components/NavComponents/About'
import Cart from './components/NavComponents/Cart'
import Contact from './components/NavComponents/Contact'
import ViewSpecs from './components/NavComponents/Categories/ViewSpecs/ViewSpecs'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopNavbar/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/processors' component={Processors} />
            <Route path='/graphicscard' component={GraphicCards} />
            <Route path='/profile' component={Profile} />
            <Route path='/settings' component={Settings} />
            <Route path='/products' component={Products} />
            <Route path='/about' component={About} />
            <Route path='/cart' component={Cart} />
            <Route path='/contact' component={Contact} />
            <Route path='/processor/:id' component={ViewSpecs} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;