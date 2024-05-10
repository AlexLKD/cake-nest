import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/maths";
import Card from "../../../reusable-ui/Card";
import { useAdmin } from "../../../../context/AdminContext";
import Cart from "./Cart";

export default function Menu() {
  const { isAdminMode, products, restoreDefaultProducts, setSelectedProduct } = useAdmin();
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleCardSelect = (product) => {
    setSelectedProduct(product);
    setSelectedCardId(product.id);
  };

  let adminActions;
  if (products.length === 0) {
    adminActions = isAdminMode ? (
      <div style={{width: '70vw', display: 'flex', maxWidth: '1200px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', padding: '0'}}>
        <p>Il n'y a plus de produits disponibles ?</p>
        <p>Cliquez ci-dessous pour les réinitialiser</p>
      <button className="btn-restore" onClick={restoreDefaultProducts}>Générer de nouveaux gateaux</button>
      </div>
    ) : (
      <div style={{width: '70vw', display: 'flex', maxWidth: '1200px', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', padding: '0'}}>
      <p>Victime de notre succès</p>
      <p>De nouvelles recettes sont en préparation, revenez vite !</p>
    </div>

    );
  }

  return (
    <div style={{ display: 'flex' }}>
      <Cart />
      <MenuStyled className="menu">
        {adminActions}
          {products.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              imageSource={item.imageSource}
              price={formatPrice(item.price)}
              isSelected={item.id === selectedCardId}
              onSelect={handleCardSelect}
            />
          ))}
      </MenuStyled>
    </div>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: inset 0px 4px 17px 0px rgba(0,0,0,0.73);
  width: calc(100% - 300px);

  .btn-restore {
    display: flex;
    height: 40px;
    align-items: center;
  }
`
