import React from 'react';
import styled from 'styled-components';

export default function Cart() {
  return (
    <CartContainer>
      <TotalContainer>
        total : 0,00€
      </TotalContainer>
      <EmptyMessage>
        votre commande est vide
      </EmptyMessage>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  width: 300px;
  height: 100%; 
  position: sticky; 
  top: 0;
  background-color: white;
  box-shadow: -5px 0 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
`;

const TotalContainer = styled.div`
  padding: 20px;
  border-bottom: 1px solid #ccc;
`;

const EmptyMessage = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
