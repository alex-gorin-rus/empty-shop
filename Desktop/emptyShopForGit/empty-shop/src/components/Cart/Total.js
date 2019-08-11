import React, {Component} from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../../context';
import {Link} from 'react-router-dom';
import '../../App.css';

export default function CleanersTotal({value}){
  const {cartTotal, clearCart} = value;
  return(
    <React.Fragment>
      <div className="container">
        <div className="row">


            <div className="cleaners-total-sum">
              The total sum in my cart is: <strong className="red-fonts">$ {cartTotal}</strong>
            </div>

        </div>
      </div>
    </React.Fragment>
  );
}












































//10
