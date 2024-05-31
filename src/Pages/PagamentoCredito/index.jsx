import React, { useState } from 'react';
import './PagamentoCredito.css';
import './../../Components/Login/Login.css';
import Logo from "./../../Components/Logo";
import InputMask from 'react-input-mask';
import { FaCreditCard } from 'react-icons/fa';

export default function PagamentoCredito() {
  const [expiryDate, setExpiryDate] = useState('');
  const [error, setError] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleExpiryDateChange = (e) => {
    const value = e.target.value;
    setExpiryDate(value);

    const [month, year] = value.split('/');
    if (value.length === 7) {
      const monthNumber = parseInt(month, 10);
      const yearNumber = parseInt(year, 10);
      const currentYear = new Date().getFullYear();

      if (monthNumber < 1 || monthNumber > 12 || yearNumber < currentYear) {
        setError('Data de vencimento inválida');
      } else {
        setError('');
      }
    } else {
      setError('');
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section className='containerGeral'>
      <p>PAGAMENTO CRÉDITO</p>
      <Logo />
      <h2>Estamos quase lá! Preencha os campos abaixo para realizar o pagamento e finalizar sua compra com segurança.</h2>
      <InputMask 
      placeholder='DIGITE O NOME DO TITULAR' 
      className="input-field"
      />
      <div className="input-container">
        <InputMask
          mask="9999 9999 9999 9999"
          placeholder="Digite o número do seu cartão"
          className="input-field"
        />
        <FaCreditCard className="credit-card-icon" />
      </div>

      <div className="input-container">
        <InputMask
          mask="99/9999"
          placeholder="Data de Vencimento"
          className={`input-field ${error ? 'input-error' : ''}`}
          value={expiryDate}
          onChange={handleExpiryDateChange}
        />
        {error && <div className="error-message">{error}</div>}
      </div>
      <InputMask 
      mask="999"
      placeholder='CVV'
      className='input-field'
      />
      <InputMask 
      mask="999.999.999-99"
      placeholder='DIGITE O CPF DO TITULAR'
      className='input-field'
      />

        <div className="input-container checkbox-container">
        <input
          type="checkbox"
          id="saveCard"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="checkbox-input"
        />
        <label htmlFor="saveCard" className="checkbox-label">Manter informações neste dispositivo para futuras utilizações.</label>
      </div>

    </section>
  );
}
