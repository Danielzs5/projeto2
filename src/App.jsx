import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleAlert = () => {
    alert('Obrigado pela resposta');
  };

  return (
    <form>
      <label>
        Qual seu nome?
        <input
          type="text"
          name="username"
          value={inputs.username || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Qual sua cidade preferida dos EUA?
        <input
          type="text"
          name="city"
          value={inputs.city || ''}
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={handleAlert}>
        ENVIAR
      </button>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

export default MyForm; // Corrigido para exportar MyForm
