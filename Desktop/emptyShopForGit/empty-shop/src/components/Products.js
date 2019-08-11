import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';
import LinkToCart from './LinkToCart';
import '../App.css';
import Title from './Title';

export default class Products extends Component{
  render(){
    const {id, title, info, img, cart, inCart, price} = this.props.cleaners;
    return(
      <ProductWrapper className="col-9 mx-auto col-md-3 col-lg-3 my-3">
        <div className="card">
          <div className="img-container py-5">
          <ProductConsumer>
            {(value)=>(
              <p
                className="details"
                  onClick={()=> {
                    value.openModal(id);
                }}>
                  details
              </p>
            )}
          </ProductConsumer>
            <img src={img} alt="product" className="card-img-top" />
            <ProductConsumer>
              {(value) => {
                return(
                  <button
                  cart = "true"
                  className="cart-btn"
                  disabled={inCart?true:false}
                  onClick={()=>{
                    value.addToCart(id);
                  }}>
                      {inCart?(<p className="added-cart mb-0" disabled>in card</p>):(<i className=" add-cart fas fa-cart-plus">add to card</i>)}
                  </button>
                );
              }}
            </ProductConsumer>
            <GoToCart><Link to="/cart">go to cart</Link></GoToCart>
          </div>


          <div className="card-footer d-flex justify-context-between">
            <TitleText className="pr-3">{title}</TitleText>

            <PriceColor className="text-blue title-font mb-0 pl-3">$ {price}<br/></PriceColor>

          </div>
        </div>
      </ProductWrapper>

    );
  }
}


const ProductWrapper = styled.div`
.card{
  border-color:transparent;
  transition all 1s linear;
}
.details{
  transition: all 0.5s linear;
  cursor:pointer;
}
.details:hover{
  color:red;
  font-size:1.1rem;
  transition: all 0.5s linear;
}
.card-footer{
  background:transparent;
  border-top:transparent;
  transition: all 1s linear;
}
&:hover{
  .card{
    border:0.05rem solid rgba(0,0,0,0.2);
    box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
  }
  .card-footer{
    background:rgba(247 247 247);
  }
  .cart-btn{
    right:0;
    transition: all 0.5s linear;
  }
}

.img-container{
  position:relative;
  overflow:hidden;

}
.card-img-top{
  transition: all 0.5s linear;
}

.title-font{

}


.cart-btn{
  position:absolute;
  bottom:0;
  right:0%;
  padding: 0.2rem 0.4rem;

  border:none;
  color:var(--mainWhite);
  border-radius:0.5rem 0 0 0;
  transition:all 0.5s linear;
}
.add-cart{
  background:var(--texDeepBlue);
  padding:12px;
}
.added-cart{
  background:var(--darkGreen);
  padding:8px 12px 8px 12px;
}
`
const GoToCart = styled.div`
font-family: 'Literata', serif !important;
@media(max-width:992px){
  font-size:0.8rem;
  margin-bottom:30px;
}
@media(max-width:767px){
  font-size:1.1rem;
}
`



const TitleText = styled.p`
  font-family: 'Literata', serif !important;
  font-size:1rem;
  padding-left:0% !important;
  @media(max-width:1050px){
    font-size:0.7rem;
    width:50%;
  }
  @media(max-width:767px){
    font-size:1rem;
    width:50%;
  }
`
const Volume = styled.div`
  padding-right:5px;
  font-size:0.9rem;
  @media(max-width:767px){
    font-size:1rem;
    width:50%;
  }
`
const PriceColor = styled.div`
  color:var(--mainPink);
  font-size:1.1rem;
  @media(max-width:767px){
    font-size:1.5rem;
    width:50%;
  }
`

Products.propTypes = {
  cleaners:PropTypes.shape({
    id:PropTypes.number,
    title:PropTypes.string,
    img:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool,
  }).isRequired
};
