import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default class LinkProductsFromCart extends Component{
  render(){
    return(
      <DivForLink>
        <Link to="/products">Our products</Link>
      </DivForLink>
    );
  }
}

const DivForLink = styled.div`
position:absolute;
top:100%;
right:0%;
font-size:1.5rem;
padding:1%;
border-radius:50%;
border:2px solid red;
z-index:100;
`
