import React, {Component} from 'react';
import LinkProducts from '../LinkProducts';

export default function EmptyCart(){
  return(
    <div className="container mt-5">
      <div className="row">
      <LinkProducts />
        <div className="col-10 mx-auto text-center text-title">
          <h1>Your cart is currently empty</h1>
        </div>
      </div>
    </div>
  );
}
