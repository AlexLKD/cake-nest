import { useState } from "react"
import styled from "styled-components"
import { fakeMenu } from "../../../fakeData/fakeMenu"
import { theme } from "../../../theme"
import { formatPrice } from "../../../utils/maths"
import Card from "../../reusable-ui/Card"

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu)

  return (
    <MenuStyled className="menu">
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource}
            leftDescription={formatPrice(price)}
          />
        )
      })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
`
