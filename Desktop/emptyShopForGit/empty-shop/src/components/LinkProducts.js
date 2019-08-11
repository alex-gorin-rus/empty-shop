import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


export default class LinkProducts extends Component{
  render(){
    return(
      <LinkCleanersDiv>
        <Link to="/products">Our products</Link>
      </LinkCleanersDiv>
    );
  }
}


const LinkCleanersDiv = styled.div`
position:absolute;
top:20%;
right:0%;
font-size:1.5rem;
padding:1%;
border-radius:50%;
border:2px solid red;
z-index:10;
`
