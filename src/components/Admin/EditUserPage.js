import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import styles from "./EditUserPage.module.css"

const EditUserPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [birthdate, setBirthdate] = useState('');
  const [cep, setCep] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://179.209.23.75:3001/admin/users/${userId}`);
        setUser(response.data);
        setBirthdate(response.data.birthdate ? new Date(response.data.birthdate).toISOString().split('T')[0] : ''); // Convertendo para o formato 'yyyy-MM-dd'
        setCep(response.data.cep || '');
        setAddress(response.data.address || '');
        setBairro(response.data.bairro || '');
        setCidade(response.data.cidade || '');
        setEstado(response.data.estado || '');
        setNumber(response.data.number || '');
        setPhoneNumber(response.data.phoneNumber || '');
      } catch (error) {
        console.error('Erro ao carregar usuário:', error);
      }
      setLoading(false);
    };

    fetchUser();
  }, [userId]);

  const handleCepChange = async () => {
    if (cep.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        setAddress(response.data.logradouro);
        setBairro(response.data.bairro);
        setCidade(response.data.localidade);
        setEstado(response.data.uf);
      } catch (error) {
        console.error('Erro ao buscar endereço pelo CEP:', error);
      }
    }
  };

  const handleUpdateUser = async () => {
    setLoading(true);
    try {
      const userData = {
        displayName: user.displayName,
        email: user.email,
        birthdate: new Date(birthdate).toISOString(), // Convertendo para o formato ISO
        cep,
        address,
        bairro,
        cidade,
        estado,
        number,
        phoneNumber
      };

      await axios.put(`http://179.209.23.75:3001/admin/users/${userId}`, userData);
      alert('Usuário atualizado com sucesso');
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      alert('Erro ao atualizar usuário');
    }
    setLoading(false);
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!user) {
    return <p>Usuário não encontrado</p>;
  }

  return (
    <div>
        <div className='section'>
            <div className='header'>
                <div className='container'>
                    <div className='banner'>
                        <h1>Editar Usuário {user.displayName}</h1>
                    </div>
                </div>
            </div>
        <div className={styles.form_container}>
            <h2>Editar Usuário</h2>
            <label>Nome:
                <input type="text" value={user.displayName} onChange={e => setDisplayName(e.target.value)} />
            </label>
            <label>Email:
                <input type="email" value={user.email} onChange={e => setEmail(e.target.value)}  />
            </label>
            <label>Data de Nascimento:
                <input type="date" value={birthdate} onChange={e => setBirthdate(e.target.value)} />
            </label>
            <label>CEP:
                <input type="text" value={cep} onChange={e => setCep(e.target.value)} onBlur={handleCepChange} />
            </label>            
            <label>Endereço:
                <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
            </label>
            <label>Bairro:
                <input type="text" value={bairro} onChange={e => setBairro(e.target.value)} />
            </label>
            <label>Cidade:
                <input type="text" value={cidade} onChange={e => setCidade(e.target.value)} />
            </label>            
            <label>Estado:
                <input type="text" value={estado} onChange={e => setEstado(e.target.value)} />
            </label>
            <label>Número:
                <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            </label>
            <label>Número de Telefone:
                <input type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
            </label>
            <button className='btn' onClick={handleUpdateUser}>Salvar</button>
            <Link className='btn' to='/admin/users'>Voltar</Link>
        </div>
    </div>
    </div>
  );
};

export default EditUserPage;
