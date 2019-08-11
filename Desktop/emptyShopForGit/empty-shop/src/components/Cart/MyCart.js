import React, {Component} from 'react';
import ProductsCart from './ProductsCart';




export default class MyCart extends Component{
  render(){
    return(
      <section className="pt-5">
        <ProductsCart />
      </section>
    );
  }
}
