import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import '../App.css';

export default class LinkToCart extends Component{
  render(){
    return(
      <DivForLinkToCleanersCart>
        <Link to="/cart">go to cart</Link>
      </DivForLinkToCleanersCart>
    );
  }
}

const DivForLinkToCleanersCart = styled.div`
position:fixed;
top:20%;
right:0%;
font-size:1.5em;
padding:1%;
border-radius:50%;
border:2px solid red;
z-index:10;
@media(max-width:1000px){
  font-size:0.8rem;
}
`
