import React from 'react'
import styles from './Business.module.css'
import { useState } from 'react';
import axios from 'axios';

const Business = () => {

  const [empresa, setEmpresa] = useState({
    cnpj: '',
    nomeFantasia: '',
    razaoSocial: '',
    inscricaoEstadual: '',
    tipoLogradouro: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    cep: '',
    uf: '',
    telefone: '',
    site: '',
    email: '',
    ramoAtividade: '',
    dataFundacao: '',
    numFuncionarios: '',
    porteEmpresa: '',
    setorAtuacao: ''
});

const handleEmpresaChange = (e) => {
  const { name, value } = e.target;
  setEmpresa(prevEmpresa => ({
      ...prevEmpresa,
      [name]: value
  }));
};

const handleConsultaCNPJ = async () => {
  try {
      const response = await axios.get(`https://brasilapi.com.br/api/cnpj/v1/${empresa.cnpj}`);
      const data = response.data;

      const dataFormatada = formatarData(data.data_inicio_atividade);

      // Atualiza o estado com os dados retornados da API
      setEmpresa(prevEmpresa => ({
          ...prevEmpresa,
          nomeFantasia: data.nome_fantasia,
          razaoSocial: data.razao_social,
          tipoLogradouro: data.descricao_tipo_de_logradouro,
          endereco: data.logradouro,
          numero: data.numero,
          complemento: data.complemento,
          bairro: data.bairro,
          cep: data.cep,
          cidade: data.municipio,
          estado: data.uf,
          telefone: data.ddd_telefone_1,
          ramoAtividade: data.cnae_fiscal_descricao,
          dataFundacao: dataFormatada,

          // Outros campos de interesse
          //cnpj: formatCnpj(empresa.cnpj)
      }));
  } catch (error) {
      console.error('Erro ao consultar CNPJ:', error);
  }
};

const formatarData = (data) => {
  // Formata a data para DD/MM/AAAA
  const partes = data.split('-');
  return `${partes[2]}/${partes[1]}/${partes[0]}`;
};

  return (
    <div className={styles.container}>
    <div className={styles.profiles}> 
      <form>
      <h2>Dados da Empresa</h2>
                <div className={styles.cnpjRow}>
                  <input type="text" name="cnpj" value={empresa.cnpj} onChange={handleEmpresaChange} placeholder="CNPJ" />
                  <button type="button" onClick={handleConsultaCNPJ}>Preencher automaticamente</button>
                </div>
                <div className={styles.formRow}>
                  <input type="text" name="nomeFantasia" value={empresa.nomeFantasia} onChange={handleEmpresaChange} placeholder="Nome Fantasia" />
                  <input type="text" name="razaoSocial" value={empresa.razaoSocial} onChange={handleEmpresaChange} placeholder="Razão Social" />
                  <input type="text" name="inscricaoEstadual" value={empresa.inscricaoEstadual} onChange={handleEmpresaChange} placeholder="Inscrição Estadual" />
                  <input type="text" name="tipoLogradouro" value={empresa.tipoLogradouro} onChange={handleEmpresaChange} placeholder="Tipo de Logradouro (Rua, Alameda, Avenida)" />
                  <input type="text" name="endereco" value={empresa.endereco} onChange={handleEmpresaChange} placeholder="Endereço" />
                  <input type="text" name="numero" value={empresa.numero} onChange={handleEmpresaChange} placeholder="Número" />                
                  <input type="text" name="complemento" value={empresa.complemento} onChange={handleEmpresaChange} placeholder="Complemento" />
                  <input type="text" name="bairro" value={empresa.bairro} onChange={handleEmpresaChange} placeholder="Bairro" />
                  <input type="text" name="cep" value={empresa.cep} onChange={handleEmpresaChange} placeholder="CEP" />
                  <input type="text" name="cidade" value={empresa.cidade} onChange={handleEmpresaChange} placeholder="Cidade" />
                  <input type="text" name="estado" value={empresa.estado} onChange={handleEmpresaChange} placeholder="Estado" />
                  <input type="text" name="telefone" value={empresa.telefone} onChange={handleEmpresaChange} placeholder="Telefone" />
                  <input type="text" name="site" value={empresa.site} onChange={handleEmpresaChange} placeholder="Site" />
                  <input type="text" name="email" value={empresa.email} onChange={handleEmpresaChange} placeholder="E-Mail" />
                  <input type="text" name="ramoAtividade" value={empresa.ramoAtividade} onChange={handleEmpresaChange} placeholder="Ramo de Atividade" />
                  <input type="text" name="dataFundacao" value={empresa.dataFundacao} onChange={handleEmpresaChange} placeholder="Data de Fundação" />
                  <input type="number" name="numFuncionarios" value={empresa.numFuncionarios} onChange={handleEmpresaChange} placeholder="Número de Funcionários" />
                  <select name="porteEmpresa" value={empresa.porteEmpresa} onChange={handleEmpresaChange}>
                      <option value="">Selecione o Porte da Empresa</option>
                      <option value="MEI">MEI - Microempreendedor Individual</option>
                      <option value="ME">ME - Microempresa</option>
                      <option value="EPP">EPP - Empresa de Pequeno Porte</option>
                  </select>
                  <select name="setorAtuacao" value={empresa.setorAtuacao} onChange={handleEmpresaChange}>
                      <option value="">Selecione o Setor de Atuação da Empresa</option>
                      <option value="comercio">Comércio</option>
                      <option value="servicos">Serviços</option>
                      <option value="industria">Industria</option>
                  </select>
                </div>
      </form>
    </div>
    </div>
  )
}

export default Business
