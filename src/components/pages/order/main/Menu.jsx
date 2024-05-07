import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fakeMenu } from "../../../../fakeData/fakeMenu";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/maths";
import Card from "../../../reusable-ui/Card";
import { useAdmin } from "../../../../context/AdminContext";

export default function Menu() {
  const { products, addProduct } = useAdmin();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu([...products, ...fakeMenu]);
  }, [products]);

  console.log(menu);

  return (
    <MenuStyled className="menu">
    {menu.map((item, index) => (
      <Card
        key={item.id || index}
        title={item.title}
        imageSource={item.imageSource}
        price={formatPrice(item.price)}
      />
    ))}
    </MenuStyled>
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
`
