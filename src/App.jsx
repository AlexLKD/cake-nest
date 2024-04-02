import { useState } from 'react'
import './App.css'

function App() {

  // state (données)
  const [firstName, setFirstName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // action comportements

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName.trim() === '') {
      setErrorMessage('Le champ prénom est obligatoire.');
    } else {
      alert(`Bonjour ${firstName}`);
      setFirstName('');
      setErrorMessage('');
    }
  }

  const handleChange = (event) => {
    setFirstName(event.target.value);
  };

  //affichage

  return (
    <>
        <h1>Bienvenue chez nous !</h1>
        <h2>Connectez-vous </h2>
        {errorMessage && <div className="error">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={firstName}
            onChange={handleChange}
            placeholder="Entrez votre prénom..."
          />
        <button type="submit">Accéder à votre espace</button>
      </form>
    </>
  )
}

export default App
