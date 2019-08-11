import React, {Component} from 'react';
import Products from './Products';
import {ProductConsumer} from '../context';

export default class ProductsList extends Component{
  render(){
    return(
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <ProductConsumer>
                {value =>{
                    return value.products.map(cleaners =>{
                        return <Products key={cleaners.id} cleaners = {cleaners} />;
                    });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
