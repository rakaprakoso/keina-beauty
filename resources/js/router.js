import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Header as Navbar } from './components/Header';
import Footer1 from './components/Footer/Footer1';
const Main = props => (
    <>
        <div id="header">
            <Navbar />
        </div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </Switch>
        <Footer1/>
    </>
);
export default Main;