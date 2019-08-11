import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Clients from './components/Clients';
import ProductsList from './components/ProductsList';
import MyCart from './components/Cart';
import Constacts from './components/Contacts'
import Page404 from './components/Page404';
import Modal from './components/Modal';

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/clients" component={Clients} />
            <Route path="/products" component={ProductsList} />
            <Route path="/cart" component={MyCart} />
            <Route path="/contacts" component={Constacts} />
            <Route component={Page404} />
          </Switch>
          <Modal />
      </React.Fragment>
    );
  }
}


export default App;
