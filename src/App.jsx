import { useState } from 'react'
import './App.css'

function App() {

  // state (données)

  const [firstName, setFirstName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // action comportements

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = firstName.trim() === '' ? 'Le champ prénom est obligatoire.' : `Bonjour ${firstName}`;
    setErrorMessage(message === `Bonjour ${firstName}` ? '' : message);
    if (message === `Bonjour ${firstName}`) {
      setFirstName(''); 
      alert(message);
    }
  };
  

  const handleChange = (e) => {
    setFirstName(e.target.value);
  };

  // affichage

  return (
    <>
        <h1>Bienvenue chez nous !</h1>
        <h2>Connectez-vous </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={firstName}
            onChange={handleChange}
            placeholder="Entrez votre prénom..."
            />
        <button type="submit">Accéder à votre espace</button>
      </form>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </>
  )
}

export default App
