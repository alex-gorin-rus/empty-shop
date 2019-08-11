import React, {Component} from 'react';
import styled from 'styled-components';


export default class Author extends Component{
  render(){
    return(
      <AuthorDiv>Designed by Alexander Gorin `My email:alexander-gorin-rus@yandex.kz`</AuthorDiv>
    );
  }
}

const AuthorDiv = styled.div`
position:fixed;
width:100vw;
top:90%;
left:40%;
font-size:1.2rem;
color:red;
font-family: 'Literata', serif !important;
`
