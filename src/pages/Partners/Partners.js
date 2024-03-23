import React from 'react'
import styles from './Partners.module.css'
import { useState } from 'react';

const Partners = () => {

  const [socios, setSocios] = useState([]);

  const handleSocioChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSocios = [...socios];
    updatedSocios[index][name] = value;
    setSocios(updatedSocios);
};

const handleAddSocio = () => {
  if (socios.length < 5) {
      setSocios([...socios, { nomeCompleto: '', cpf: '', email: '', celular: '' }]);
  } else {
      alert('Você atingiu o limite máximo de sócios (5).');
  }
};

  return (
    <div className={styles.sociosContainer}>
                  <div className={styles.sociosHeader}>
                    <h2>Dados dos Sócios</h2>
                    <button type="button" onClick={handleAddSocio}>Adicionar</button>
                  </div>
                  {/* Campos de dados dos sócios */}
                  <div className={styles.sociosData}>
                    {socios.map((socio, index) => (
                      <div key={index}>
                        <input type="text" name="nomeCompleto" value={socio.nomeCompleto} onChange={(e) => handleSocioChange(index, e)} placeholder="Nome Completo" />
                        <input type="text" name="cpf" value={socio.cpf} onChange={(e) => handleSocioChange(index, e)} placeholder="CPF" />
                        <input type="text" name="email" value={socio.email} onChange={(e) => handleSocioChange(index, e)} placeholder="E-Mail" />
                        <input type="text" name="celular" value={socio.celular} onChange={(e) => handleSocioChange(index, e)} placeholder="Celular" />
                      </div>
                    ))}
                  </div>
                </div>
  )
}

export default Partners
