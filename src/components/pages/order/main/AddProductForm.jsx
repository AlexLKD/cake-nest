import React, { useState } from 'react';
import { useAdmin } from '../../../../context/AdminContext';
import styled from 'styled-components';
import { GiCupcake } from "react-icons/gi";
import { MdOutlineEuro } from 'react-icons/md';
import { BsFillCameraFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddProductForm({ isPanelOpen }) {
  const { addProduct } = useAdmin();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [preview, setPreview] = useState('/images/cupcake-item.png');

  const notifySubmitForm = () => {
    toast.success('Ajouté avec succès !', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedPrice = price ? price : 0.00;
    const productImage = imageUrl || '/images/cupcake-item.png';
    addProduct({ title: name, imageSource: productImage, price: formattedPrice });
    setName('');
    setPrice('');
    setImageUrl('');
    setPreview('/images/cupcake-item.png');
    notifySubmitForm();
  };
  

  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setImageUrl(url);
    setPreview(url);
  };

  return (
    <form onSubmit={handleSubmit}>
      <AddForm>
        {isPanelOpen && preview && <img className='preview-img' src={preview} alt="Prévisualisation du produit" />}
        <InputsStyled>
          <div className='input-div'>
            <input
              className='input'
              type="text"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <GiCupcake className='icon'/>
        </div>
          <div className='input-div'>
            <input
              className='input'
              type="text"
              placeholder=""
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <MdOutlineEuro className='icon'/>
          </div>
          <div className='input-div'>
            <input
              className='input'
              type="text"
              placeholder=""
              value={imageUrl}
              onChange={handleImageUrlChange}
            />
            <BsFillCameraFill className='icon'/>
          </div>
          <button type="submit">Ajouter un nouveau produit</button>
        </InputsStyled>
      </AddForm>
    </form>
  );
};

const AddForm = styled.div`
  display: flex;
  align-items: center;

  .preview-img {
    max-width: 250px;
  }

  .input-div {
    position: relative;
  }

  .input {
    padding-left: 30px;
  }

  .icon {
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const InputsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`;
