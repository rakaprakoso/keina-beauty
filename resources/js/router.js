import { React,useEffect } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import {Helmet} from "react-helmet";

import { Header as Navbar } from './components/Header';
import Footer1 from './components/Footer/Footer1';
import NotFound from './pages/NotFound';

import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Product from './pages/Ecommerce/Product';
import {Cart,Checkout} from './pages/Ecommerce/Transactions.module'

const Main = props => {
    return (
        <>
            <Helmet>
                <meta name="theme-color" content="#2a3f2b"/>
                <link rel="shortcut icon" href="\assets\green-white.png" type="image/x-icon" />
            </Helmet>
            <div id="header">
                <Navbar />
            </div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About} />
                <Route path="/shop" component={Shop} />
                <Route path="/product/:slug" component={Product}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/checkout" component={Checkout}/>

                <Route path="/contact" component={Contact}/>
                <Route component={NotFound} />
            </Switch>
            <Footer1 />
        </>
    )
};
export default Main;
