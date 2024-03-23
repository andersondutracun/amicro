import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Form.module.css'

function Formulario() {
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

    const [responsavel, setResponsavel] = useState({
        nomeCompleto: '',
        cpf: '',
        rg: '',
        orgaoExpedidor: '',
        cep: '',
        endereco: '',
        numero: '',
        bairro: '',
        cidade: '',
        telefone: '',
        celular: '',
        email: ''
    });

    const [socios, setSocios] = useState([]);

    const [taxaAssociacao, setTaxaAssociacao] = useState('');

    const [servicosInteresse, setServicosInteresse] = useState([]);
    const [outrosServicos, setOutrosServicos] = useState('');

    const handleEmpresaChange = (e) => {
      const { name, value } = e.target;
      setEmpresa(prevEmpresa => ({
          ...prevEmpresa,
          [name]: value
      }));
  };

    const handleResponsavelChange = async (e) => {
        const { name, value } = e.target;
        setResponsavel(prevResponsavel => ({
            ...prevResponsavel,
            [name]: value
        }));

        if (name === 'cep' && value.length === 8) {
          try {
              const response = await axios.get(`https://viacep.com.br/ws/${value}/json/`);
              const data = response.data;

              // Atualiza o estado com os dados retornados do ViaCEP
              setResponsavel(prevResponsavel => ({
                  ...prevResponsavel,
                  endereco: data.logradouro,
                  bairro: data.bairro,
                  cidade: data.localidade
              }));
          } catch (error) {
              console.error('Erro ao consultar CEP:', error);
          }
      }
    };

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

    const handleTaxaAssociacaoChange = (e) => {
        setTaxaAssociacao(e.target.value);
    };

    const handleServicosInteresseChange = (e) => {
      const options = e.target.options;
      const selectedServices = [];
      let outrosSelecionado = false; 
  
      for (let i = 0; i < options.length; i++) {
          if (options[i].selected) {
              selectedServices.push(options[i].value);
              if (options[i].value === 'outros') {
                  outrosSelecionado = true;
              }
          }
      }

      if (outrosSelecionado && !selectedServices.includes('outros')) {
          setOutrosServicos('');
          selectedServices.push('outros');
      }
  
      setServicosInteresse(selectedServices);
  };

    const handleOutrosServicosChange = (e) => {
      setOutrosServicos(e.target.value);
  };

    const formatarData = (data) => {
      // Formata a data para DD/MM/AAAA
      const partes = data.split('-');
      return `${partes[2]}/${partes[1]}/${partes[0]}`;
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

  

  const formatCnpj = (cnpj) => {
    const cnpjDigits = cnpj.replace(/\D/g, '');
    return cnpjDigits.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
};

    return (
      <div className={styles.page}>
      <div className='section'>
        <div className='header'>
          <div className='container'>
            <div className='banner'>
              <h1>Formulário</h1>
              <p>Preencha com seus dados para poder se associar a AMICRO!</p>
            </div>
          </div>
        </div>
        </div>
        <div className={styles.container}>
          <div className={styles.form}>
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

                <h2>Dados do Responsável</h2>
                {/* Campos de dados do responsável */}
                <div className={styles.responsavelRow}>
                <input type="text" name="nomeCompleto" value={responsavel.nomeCompleto} onChange={handleResponsavelChange} placeholder="Nome Completo" />
                <input type="text" name="cpf" value={responsavel.cpf} onChange={handleResponsavelChange} placeholder="CPF" />
                <input type="text" name="rg" value={responsavel.rg} onChange={handleResponsavelChange} placeholder="RG" />
                <input type="text" name="orgaoExpedidor" value={responsavel.orgaoExpedidor} onChange={handleResponsavelChange} placeholder="Orgão Expedidor" />
                <input type="text" name="cep" value={responsavel.cep} onChange={handleResponsavelChange} placeholder="CEP" />
                <input type="text" name="endereco" value={responsavel.endereco} onChange={handleResponsavelChange} placeholder="Endereço" />
                <input type="text" name="numero" value={responsavel.numero} onChange={handleResponsavelChange} placeholder="Numero" />
                <input type="text" name="bairro" value={responsavel.bairro} onChange={handleResponsavelChange} placeholder="Bairro" />
                <input type="text" name="cidade" value={responsavel.cidade} onChange={handleResponsavelChange} placeholder="Cidade" />
                <input type="text" name="telefone" value={responsavel.telefone} onChange={handleResponsavelChange} placeholder="Telefone" />
                <input type="text" name="celular" value={responsavel.celular} onChange={handleResponsavelChange} placeholder="Celular" />
                <input type="text" name="email" value={responsavel.email} onChange={handleResponsavelChange} placeholder="E-Mail" />
                </div>
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
                      
                <div className={styles.services}>
                <h2>Serviços de Interesse (Selecione vários segurando CTRL)</h2>
                {/* Opções de serviços de interesse */}
                <select multiple value={servicosInteresse} onChange={handleServicosInteresseChange}>
                    <option value="descontos_em_educacao_superior">Descontos em Educação superior</option>
                    <option value="cursos_de_qualificacao_empresarial">Cursos de qualificação empresarial</option>
                    <option value="cursos_de_qualificacao_dos_funcionarios">Cursos de qualificação dos funcionários</option>
                    <option value="palestras_empresariais">Palestras empresariais</option>
                    <option value="palestras_para_os_funcionarios">Palestras para os funcionarios</option>
                    <option value="consultoria_contabil">Consultoria contábil</option>
                    <option value="consultoria_financeira">Consultoria financeira</option>
                    <option value="consultoria_de_rh">Consultoria de RH</option>
                    <option value="recrutamento_de_pessoas">Recrutamento de pessoas</option>
                    <option value="consultoria_vendas">Consultoria vendas</option>
                    <option value="consultoria_em_gestao">Consultoria em gestão</option>
                    <option value="consultoria_em_tecnologia">Consultoria em tecnologia</option>
                    
                    <option value="consultoria_em_marketing">Consultoria em Marketing</option>
                    <option value="consultoria_em_midias_sociais">Consultoria em mídias sociais</option>
                    <option value="consultoria_em_exportacao_ou_importacao">Consultoria em exportação ou importação</option>
                    <option value="plano_de_saude">Plano de saúde</option>
                    <option value="plano_de_saude_mental">Plano de saúde bucal</option>
                    <option value="atendimento_em_saude_mental">Atendimento em saúde mental</option>
                    <option value="intermediacao_de_negocios">Intermediação de negócios</option>
                    <option value="networking_entre_empresas">Networking entre empresas</option>
                    <option value="consultoria_juridica">Consultoria jurídica</option>
                    <option value="consultoria_tributaria">Consultoria tributaria</option>
                    <option value="coaching_para_gestores">Coaching para Gestores</option>
                    <option value="mentoria_empresarial">Mentoria Empresarial</option>
                    <option value="outros">Outros</option>
                </select>
                {servicosInteresse.includes('outros') && (
                    <input
                        type="text"
                        value={outrosServicos}
                        onChange={handleOutrosServicosChange}
                        placeholder="Descreva outros serviços de interesse"
                    />
                )}
                </div>
                
                <button type="submit">Enviar</button>
            </form>
            </div>
        </div>
      </div>
    );
}

export default Formulario;
