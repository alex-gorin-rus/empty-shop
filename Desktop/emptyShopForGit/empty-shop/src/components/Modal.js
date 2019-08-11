import React, {Component} from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import '../App.css';


export default class Modal extends Component {
  render(){
    return(
      <ProductConsumer>
        {(value)=>{
          const {modalOpen,closeModal} = value;
          const {id, img, title, info, inCart, price, volume} = value.modalProduct;


          if(!modalOpen){
            return null;
          }
          else{
            return(
            <ModalContainer>

              <DivForReturn onClick={()=>closeModal()}>
                <div className="close-modal-relative">
                  <Link to="products"><i className="close-modal fas fa-window-close"/></Link>
                </div>
              </DivForReturn>
              <CleanersContainer>
                <Title>{title}</Title>
                <img src={img} className=" cleanersImg" alt="image"></img>
                <ModalText>{info}</ModalText>
              </CleanersContainer>
            </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.5);
display:flex;
z-index:50;
#modal{
  background:white;
}
.my_cart{
  background:#EDC2C0;
  border-radius:7%;
  padding:2px 20px 2px 20px;
  border:2px solid red;
  transition:0.5s linear;
}

.my_cart:hover{
  border:2px solid #1226DE;
  color:white;
  background:red;
  transition:0.5s linear;
}
`;

const Title = styled.p`
  position:absolute;
  top:10%;
  width:100%;
  text-align: center;
  font-size:1.5rem;
  font-family: 'Literata', serif;
  @media(max-width:767px){
    font-size:0.9rem;
    padding-top:11%;
  }
  @media(max-width:660px){
    font-size:0.8rem;
    padding-top:11%;
  }
  @media(max-width:550px){
    font-size:0.7rem;
    padding-top:11%;
  }
`

const ModalText = styled.p`
position:absolute;
top:20%;
left:45%;
right:2%;
font-size:1rem;
font-family: 'Literata', serif !important;
@media(max-width:1000px){
  font-size:0.8rem;
  padding-top:3%;
}
@media(max-width:740px){
  font-size:0.7rem;
  padding-top:3%;
}
@media(max-width:570px){
  font-size:0.6rem;
  padding-top:3%;
}
`

const Volume = styled.p`
@media(max-width:767px){
  font-size:0.7rem;
}
`

const Price = styled.p`
@media(max-width:767px){
  font-size:0.7rem;
}
`

const DivForCart = styled.div`
position:absolute;
top:10%;
@media(max-width:950px){
  top:-20%;
}
`



const CartAded = styled.p`
@media(max-width:767px){
  font-size:0.5rem;
}
`

const CleanersContainer = styled.div`
position:fixed;
top:0;
left:20%;
width:60vw;
height:100%;
background:white;
`



const CleanersPrice = styled.div`
position:absolute;
top:70%;
left:0;
width:100%;
height:20%;

`

const ButtonCont = styled.div`
position: absolute;
top:90%;
left:60%;
`
const PhoneOrdering = styled.div`
position:absolute;
top:80%;
left:10%;
width:60%;
height:10%;
font-size:1rem;
font-family: 'Concert One', cursive !important;
@media(max-width:1000px){
  font-size:0.8rem;
  padding-top:3%;
}
@media(max-width:740px){
  font-size:0.7rem;
  padding-top:3%;
}
@media(max-width:570px){
  font-size:0.6rem;
  padding-top:3%;
}
@media(max-width:418px){
  top:85%;
}
`

const PhoneNumber = styled.div`
color:red;
`

const DivForReturn = styled.div`
  position:absolute;
  top:8%;
  left:80.5%;
  width:50px;
  height:50px;
  background:red;
  z-index:20;
  cursor:pointer;
  @media(max-width:767px){
    top:9%;
    left:81%;
    width:40px;
    height:40px;
  }
  @media(max-width:500px){
    top:8%;
    left:82%;
    width:40px;
    height:40px;
  }

  .close-modal{
    position:absolute;
    top:19px;
    left:17px;
    width:50px;
    height:50px;
    @media(max-width:767px){
      top:14px;
      left:13px;
      width:40px;
      height:40px;
    }
  }
  .close-modal-relative{
    position:relative;
  }
`












































//1
