import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../../../context/AdminContext';
import styled from 'styled-components';
import { GiCupcake } from 'react-icons/gi';
import { MdOutlineEuro } from 'react-icons/md';
import { BsFillCameraFill } from 'react-icons/bs';
import PrimaryButton from '../../../reusable-ui/PrimaryButton';

const EditProductForm = ({ product }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const { setProducts, togglePanel } = useAdmin();

  useEffect(() => {
    if (product) {
      setName(product.title);
      setPrice(product.price);
      setImageUrl(product.imageSource);
    }
  }, [product]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts((prevProducts) => {
      return prevProducts.map((p) => {
        if (p.id === product.id) {
          return { ...p, title: name, price: price, imageSource: imageUrl };
        }
        return p;
      });
    });
    togglePanel(false);
  };
    

    if (!product) return null;
  
    return (
      <FormStyled onSubmit={handleSubmit}>
        <div className='input-div'>
          <GiCupcake className='icon'/>
          <input
            className='input'
            type="text"
            placeholder="Nom du produit"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className='input-div'>
          <MdOutlineEuro className='icon'/>
          <input
            className='input'
            type="text"
            placeholder="Prix"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <div className='input-div'>
          <BsFillCameraFill className='icon'/>
          <input
            className='input'
            type="text"
            placeholder="URL de l'image"
            value={imageUrl}
            onChange={handleImageUrlChange}
          />
        </div>
        <PrimaryButton className='buttonContainer' type="submit" label="Modifier le produit" />
      </FormStyled>
    );
  };

const FormStyled = styled.form`
  display: flex;
  align-items: center;
  height: 30vh;
  width: 30vw;
  flex-direction: column;
  margin-left: 1rem;

  .preview-img {
    max-width: 250px;
  }

  .input-div {
    position: relative;
    width: 100%;
  }

  .input {
    padding-left: 30px;
    width: 100%;
    height: 30px;
    margin: .5rem 0;
  }

  .icon {
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
  }

  .buttonContainer {
    margin-bottom: .5rem;
    padding: 8px 16px;
  }
`


export default EditProductForm;