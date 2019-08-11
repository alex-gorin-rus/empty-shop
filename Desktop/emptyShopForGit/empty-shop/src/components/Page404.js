import React, {Component} from 'react';
import styled from 'styled-components';
import '../App.css';


export default class Page404 extends Component{
  render(){
    console.log(this.props);
    return (
      <DivBlack>
        <NotFound>Oops, the page <span className="not-found">{this.props.location.pathname}</span> not found</NotFound>
      </DivBlack>
    );
  }
}


const NotFound = styled.div`
position: absolute;
top:45%;
left:30%;
font-size:3rem
color: white;
`

const DivBlack = styled.div`
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:black;
`
