import React from 'react';
import styled from 'styled-components';
import SmallCard from '../../../reusable-ui/SmallCard';

export default function Cart({ cartItems, setCartItems }) {


    const total = Object.values(cartItems).reduce((total, item) => {
    const itemPrice = typeof item.price === 'string' ? parseFloat(item.price.replace(',', '.')) : item.price;
    const itemQuantity = typeof item.quantity === 'number' ? item.quantity : parseInt(item.quantity, 10);

    if (isNaN(itemPrice) || isNaN(itemQuantity)) {
      return total;
    }

    return total + itemPrice * itemQuantity;
  }, 0);

  const handleRemove = (productId) => {
    setCartItems((currentItems) => {
      const updatedItems = { ...currentItems };
      delete updatedItems[productId];
      return updatedItems;
    });
  };

  return (
    <CartContainer>
      <TotalContainer>
        total : {total.toFixed(2)}€
      </TotalContainer>
      <CartItemsContainer>
        {Object.values(cartItems).length === 0 ? (
          <EmptyMessage>votre commande est vide</EmptyMessage>
        ) : (
          Object.values(cartItems).map((item) => (
            <SmallCard 
              key={item.id} 
              title={`${item.title} x${item.quantity}`} 
              imageSource={item.imageSource} 
              price={`${item.price}`}
              handleRemove={handleRemove}
            />
          ))
        )}
      </CartItemsContainer>
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

const CartItemsContainer = styled.div`
  overflow-y: auto;
`;
