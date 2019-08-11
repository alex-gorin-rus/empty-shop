import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import '../App.css';
import Author from './Author';


export default class HomePage extends Component{
  render(){
    return(
      <Header_1>
          <CompanyName>The name of your company</CompanyName>
          <Header></Header>
        <Text>This page displays information about your company</Text>
        <Author />
      </Header_1>
    )
  }
}






const Header_1 = styled.div`
position:absolute;
width:100vw;
`

const CompanyName = styled.h1`
position: absolute;
font-size:2em;
width:100%;
font-family: 'Caveat', cursive;
top:16vh;
left:40vw;
color:red;
text-shadow: 1px 2px 2px #2121FD;
@media(max-width:1125px){
  left:30vw;
  font-size:1.7em;
}
@media(max-width:640px){
  left:27vw;
  font-size:1.4em;
}
`
const Text = styled.div`
position: absolute;
width:90vw;
top:45vh;
left:5vw;
color:var(--textColor);
font-size:1.4rem;
font-family: 'Pacifico', cursive;
@media(max-width:1125px){
  font-size:1.1rem;
  padding-right:3%;
}
@media(max-width:775px){
  font-size:1rem;
  padding-right:3%;
}
@media(max-width:610px){
  font-size:0.9rem;
  padding-right:3%;
}
`
