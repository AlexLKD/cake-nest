import React from 'react';
import styled from 'styled-components';
import { theme } from '../../theme';
import { TiDeleteOutline } from 'react-icons/ti';

const SmallCard = ({ imageSource, title, price, id, handleRemove }) => {

    const handleDeleteClick = (e) => {
      e.stopPropagation();
      handleRemove(id);
    };
  
    return (
      <SmallCardContainer>
        <ImageContainer>
          <img src={imageSource} alt={title} />
        </ImageContainer>
        <InfoContainer>
          <Title>{title}</Title>
          <Price>{price}</Price>
          <DeleteButton onClick={handleDeleteClick}>
            <TiDeleteOutline />
          </DeleteButton>
        </InfoContainer>
      </SmallCardContainer>
    );
  };


const SmallCardContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${theme.colors.white};
  margin-bottom: 10px;
  padding: 10px;
  border-radius: ${theme.borderRadius.small};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  visibility: hidden;
  ${SmallCardContainer}:hover & {
    visibility: visible;
  }
`;

const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const Title = styled.span`
  font-size: ${theme.fonts.size.P3};
  color: ${theme.colors.dark};
  font-weight: ${theme.fonts.weights.bold};
`;

const Price = styled.span`
  font-size: ${theme.fonts.size.P3};
  color: ${theme.colors.primary};
`;

export default SmallCard;
