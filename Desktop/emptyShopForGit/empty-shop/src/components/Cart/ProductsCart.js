import React, {Component} from 'react';
import EmptyCart from './EmptyCart';
import styled from 'styled-components';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartColumn from './CartColumn';
import Total from './Total';
import LinkProductsFromCart from '../LinkProductsFromCart';

export default class CleanersCart extends Component{
  render(){
    return(
      <Section>
        <ProductConsumer>
          {value =>{
            const {cart} = value;
            if(cart.length > 0){
              return(
                <React.Fragment>
                  <LinkProductsFromCart />
                  <Total value={value} />
                  <CartColumn />
                  <CartList value={value} />
                </React.Fragment>
              );
            }else{
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </Section>
    );
  }
}

const DivForEmptyCart = styled.div`
position: absolute;
top:20%;
border:1px solid red;
`
const Section = styled.div`
position:absolute;
top:40%;
width:100%;
`













































//1
