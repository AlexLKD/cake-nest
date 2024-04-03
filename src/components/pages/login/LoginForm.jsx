import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  // state (données)
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate();
  // action comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    navigate(`/order/${inputValue}`)
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  // affichage
  return (
    <>
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez-vous </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Entrez votre prénom..."
            required
            />
        <button type="submit">Accéder à votre espace</button>
      </form>
    </>
  )
}