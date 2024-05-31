import React, { useState } from 'react';
import './PagamentoCredito.css';
import './../../Components/Login/Login.css';
import Logo from "./../../Components/Logo";
import InputMask from 'react-input-mask';
import { FaCreditCard } from 'react-icons/fa';

export default function PagamentoCredito() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cpf, setCpf] = useState('');
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

  const handlePaymentSubmit = () => {
    
    if (!cardNumber) {
      setError('Por favor, preencha o número do cartão.');
      return;
    } else if (!expiryDate) {
      setError('Por favor, preencha a data de vencimento.');
      return;
    } else if (!cvv) {
      setError('Por favor, preencha o CVV.');
      return;
    } else if (!cpf) {
      setError('Por favor, preencha o CPF.');
      return;
    } else if (!isChecked) {
      setError('Por favor, aceite os termos para continuar.');
      return;
    }
    // ESPAÇO PARA COLOCARMOS A LOGICA QUE SERÁ UTILIZADA.
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
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <FaCreditCard className="credit-card-icon" />
      </div>
      {error && error.includes('número do cartão') && <div className="error-message">{error}</div>}

      <div className="input-container">
        <InputMask
          mask="99/9999"
          placeholder="Data de Vencimento"
          className={`input-field ${error && error.includes('data de vencimento') ? 'input-error' : ''}`}
          value={expiryDate}
          onChange={handleExpiryDateChange}
        />
      </div>
      {error && error.includes('data de vencimento') && <div className="error-message">{error}</div>}

      <InputMask 
        mask="999"
        placeholder='CVV'
        className='input-field'
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
      />
      {error && error.includes('CVV') && <div className="error-message">{error}</div>}

      <InputMask 
        mask="999.999.999-99"
        placeholder='DIGITE O CPF DO TITULAR'
        className='input-field'
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />
      {error && error.includes('CPF') && <div className="error-message">{error}</div>}

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
      {error && error.includes('termos') && <div className="error-message">{error}</div>}

      <button className="botaoGenerico" onClick={handlePaymentSubmit}> EFETUAR PAGAMENTO </button>
    </section>
  );
}
