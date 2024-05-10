import React, { useState } from 'react';
import { useAdmin } from '../../../../context/AdminContext';
import styled from 'styled-components';
import { GiCupcake } from 'react-icons/gi';
import { MdOutlineEuro } from 'react-icons/md';
import { BsFillCameraFill } from 'react-icons/bs';
import PrimaryButton from '../../../reusable-ui/PrimaryButton';

const EditProductForm = ({ product }) => {
  if (!product) return null;

  return (
    <FormStyled>
      <div className='input-div'>
        <GiCupcake className='icon'/>
        <input
          className='input'
          type="text"
          placeholder="Nom du produit"
          value={product.title}
          readOnly
        />
      </div>
      <div className='input-div'>
        <MdOutlineEuro className='icon'/>
        <input
          className='input'
          type="text"
          placeholder="Prix"
          value={product.price}
          readOnly
        />
      </div>
      <div className='input-div'>
        <BsFillCameraFill className='icon'/>
        <input
          className='input'
          type="text"
          placeholder="URL de l'image"
          value={product.imageSource}
          readOnly
        />
      </div>
      <PrimaryButton type="submit" label="Modifier le produit" />
    </FormStyled>
  );
};

const FormStyled = styled.form`
  // Ajoutez ici vos styles pour le formulaire
`;

export default EditProductForm;