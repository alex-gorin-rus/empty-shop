import React, {Component} from 'react';
import '../../App.css';

export default function CartColums(){
  return(
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2 my-font">
          The name of the product:
        </div>
        <div className="col-10 mx-auto col-lg-2 my-font">
          price:
        </div>
        <div className="col-10 mx-auto col-lg-2 my-font">
          quantity:
        </div>
        <div className="col-10 mx-auto col-lg-2 my-font">
        total sum for this product:
        </div>
        <div className="col-10 mx-auto col-lg-2 my-font">
          remove this item
        </div>
      </div>
    </div>
  );
}
