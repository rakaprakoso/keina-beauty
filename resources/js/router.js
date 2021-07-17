import { React,useEffect } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Header as Navbar } from './components/Header';
import Footer1 from './components/Footer/Footer1';
import NotFound from './pages/NotFound';

import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Product from './pages/Ecommerce/Product';

const Main = props => {
    return (
        <>
            <div id="header">
                <Navbar />
            </div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About} title="About Page" />
                <Route path="/shop" component={Shop} />
                <Route path="/product/:slug" component={Product}/>
                <Route path="/contact" component={Contact} title="Contact Page" />
                <Route component={NotFound} />
            </Switch>
            <Footer1 />
        </>
    )
};
export default Main;
