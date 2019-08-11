import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import '../App.css';

export default class Header extends Component{
  render(){
    return(

      <DivForHeader>
        <DivForHeaderRelative>

        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 box-shadow">
        <Link to="/" className="my-0 mr-md-auto font-weight-normal text-shadow">Main page</Link>
        <nav className="my-2 my-md-0 mr-md-3">
          <Link className="p-2 text-red" to="/clients">Our clients</Link>
          <Link className="p-2 text-red" to="/products">Our products</Link>
          <Link className="p-2 text-red" to="/contacts">Contacts</Link>
        </nav>
        </div>



        </DivForHeaderRelative>
      </DivForHeader>

    );
  }
}

const DivForHeader = styled.div`
position: fixed;
top:0;
background:#B8B8B8;
width:100vw;
height:8vh;
z-index:100;

@media(max-width:767px){
  font-size:0.7rem;
  height:9vh;
}
@media(max-width:500px){
  font-size:0.5rem;
  height:8vh;
}
`;

const DivForHeaderRelative = styled.div`
position: relative;
`;

const LinkMain = styled.div`
@media(max-width:644px){
  font-size:0.6rem;
}
`

const LinkClients = styled.span`
@media(max-width:644px){
  font-size:0.6rem;
}
`
