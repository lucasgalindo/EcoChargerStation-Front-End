import React, { useState } from 'react';
import './PagamentoRecarga.css';
import './../../Components/Login/Login.css';
import InputMask from 'react-input-mask';
import { FaCreditCard } from 'react-icons/fa';
import { FaPix } from 'react-icons/fa6';

export default function PagamentoRecarga() {
  const [value, setValue] = useState('');
  const [kwValue, setKwValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleValueChange = (e) => {
    let val = e.target.value;
    val = val.replace(/\D/g, ''); 
    val = (Number(val) / 100).toFixed(2) + ''; 
    val = val.replace('.', ','); 
    val = val.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'); 
    setValue('R$ ' + val); 
  };

  const handleKwChange = (e) => {
    let val = e.target.value;
    val = val.replace(/\D/g, ''); 
    val = (Number(val) / 100).toFixed(2) + ''; 
    setKwValue(val + ' kW/h'); 
  };

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <section className='containerGeral'>
      <p>Carro escolhido:</p>
      <img src="" alt="IMAGEM DO CARRO ESCOLHIDO" />
      <p>passar via props o nome do veiculo</p>
      <div className='recarga'>
        <p>Digite o valor da sua recarga:</p>
        <InputMask
          mask=""
          placeholder='R$ 0,00'
          value={value}
          onChange={handleValueChange}
          className='input-field'
        />
      </div>
      <div className='recarga'>
        <p>Recarga em kW/h:</p>
        <InputMask
          mask=""
          placeholder='0,00 kW/h'
          value={kwValue}
          onChange={handleKwChange}
          className='input-field'
        />
      </div>
      <div className='options-container'>
        <p>Selecione o método de pagamento</p>
        <div className='button-container'>
          <button
            className={`option-button ${selectedOption === 'pix' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('pix')}
          >
            <FaPix className='button-icon' />
            <p className='button-text'>PIX</p>
          </button>
          <button
            className={`option-button ${selectedOption === 'credito' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('credito')}
          >
            <FaCreditCard className='button-icon' />
            <p className='button-text'>Crédito</p>
          </button>
        </div>
      </div>
      <button className="botaoGenerico"> REALIZAR PAGAMENTO </button>
    </section>
  );
}
