import React from 'react'
import styles from './Billing.module.css'
import { useState } from 'react';


const Billing = () => {

  const [taxaAssociacao, setTaxaAssociacao] = useState('');

  const handleTaxaAssociacaoChange = (e) => {
    setTaxaAssociacao(e.target.value);
};

  return (
    <div className={styles.billing}>
    <div className={styles.associacao}>
      <h2>Taxa de Associação</h2>
      {/* Opções de taxa de associação */}
      <select value={taxaAssociacao} onChange={handleTaxaAssociacaoChange}>
          <option value="">Selecione a taxa de associação</option>
          <option value="Mensal">Mensal R$ 50,00</option>
          <option value="Semestral">Semestral R$ 210,00</option>
          <option value="Anual">Anual R$ 300,00</option>
      </select>
    </div>
    <div>
      Pagamentos
    </div>
  </div>
  )
}

export default Billing
