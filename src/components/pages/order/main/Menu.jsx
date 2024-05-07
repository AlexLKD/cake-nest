import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/maths";
import Card from "../../../reusable-ui/Card";
import { useAdmin } from "../../../../context/AdminContext";

export default function Menu() {
  const { isAdminMode, products, restoreDefaultProducts } = useAdmin();

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
    <>
      <MenuStyled className="menu">
      {adminActions}
        {products.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            imageSource={item.imageSource}
            price={formatPrice(item.price)}
          />
        ))}
      </MenuStyled>
    </>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: inset 0px 4px 17px 0px rgba(0,0,0,0.73);

  .btn-restore {
    display: flex;
    height: 40px;
    align-items: center;
  }
`
