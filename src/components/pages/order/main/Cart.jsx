import React from 'react';
import styled from 'styled-components';
import SmallCard from '../../../reusable-ui/SmallCard';

export default function Cart({ cartItems }) { // Utilisez cartItems passé en prop

  return (
    <CartContainer>
      <TotalContainer>
        total : {cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2)}€
      </TotalContainer>
      {cartItems.length === 0 ? (
        <EmptyMessage>
          votre commande est vide
        </EmptyMessage>
      ) : (
        cartItems.map((item, index) => (
          <SmallCard key={index} title={item.title} imageSource={item.imageSource} price={item.price} />
        ))
      )}
    </CartContainer>
  );
}

const CartContainer = styled.div`
  width: 300px;
  height: 100vh;
  position: sticky; 
  left: 0;
  top: 0;
  background-color: white;
  box-shadow: -5px 0 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
`;

const TotalContainer = styled.div`
  padding: 20px;
  border-bottom: 1px solid #ccc;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 10;
`;

const EmptyMessage = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;