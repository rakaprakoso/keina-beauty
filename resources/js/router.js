import { React,useEffect } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Header as Navbar } from './components/Header';
import Footer1 from './components/Footer/Footer1';
import NotFound from './pages/NotFound';

const Main = props => {
    return (
        <>
            <div id="header">
                <Navbar />
            </div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About} title="About Page" />
                <Route path="/contact" component={Contact} title="Contact Page" />
                <Route component={NotFound} />
            </Switch>
            <Footer1 />
        </>
    )
};
export default Main;
