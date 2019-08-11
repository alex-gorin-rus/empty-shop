import React, {Component} from 'react';
import styled from 'styled-components';

export default class Constacts extends Component{
  render(){
    return(
      <ContactsInfo>This page contains the contacts of your company </ContactsInfo>
    );
  }
}

const ContactsInfo = styled.h2`
position:absolute;
top:30vh;
`
