import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthValue } from '../../../context/AuthContext';
import styles from './ProfileAdmin.module.css';

const ProfileAdmin = () => {
  const { user, loading } = useAuthValue();
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({});
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (user) {
      axios.get('/admin/profile', { headers: { uid: user.uid } })
        .then(response => {
          setUserData(response.data);
          setFormData(response.data); // Inicializa o formulário com os dados atuais do usuário
        })
        .catch(error => {
          console.error('Erro ao obter perfil do usuário:', error);
        });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSaveClick = async () => {
    try {
      await axios.put(`/admin/profile/${userData.uid}`, formData);
      setUserData(formData); // Atualiza os dados exibidos após a edição
      setEditing(false);
    } catch (error) {
      console.error('Erro ao salvar perfil do usuário:', error);
    }
  };

  const handleCEPChange = async (e) => {
    const cep = e.target.value;
    setFormData(prevFormData => ({
      ...prevFormData,
      cep // Atualiza apenas o campo CEP
    }));

    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { logradouro, bairro, localidade, uf } = response.data;
      setFormData(prevFormData => ({
        ...prevFormData,
        address: logradouro,
        bairro,
        cidade: localidade,
        estado: uf
      }));
    } catch (error) {
      console.error('Erro ao buscar endereço pelo CEP:', error);
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className='section'>
      <div className='header'>
        <div className='container'>
          <div className='banner'>
            <h1>Perfil</h1>
          </div>
        </div>
      </div>
      <div className={styles.profile_info}>
        {userData && (
          <div className={styles.profile}>
            <p>Email: {userData.email}</p>
            <label>Nome:</label>
            <input type="text" name="displayName" value={userData.displayName || ''} onChange={handleInputChange} />
            <label>Data de Nascimento:</label>
            <input type="text" name="birthdate" value={formData.birthdate || ''} onChange={handleInputChange} />
            <label>CEP:</label>
            <input type="text" name="cep" value={formData.cep || ''} onChange={handleCEPChange} />
            <label>Endereço:</label>
            <input type="text" name="address" value={formData.address || ''} onChange={handleInputChange} />
            <label>Bairro:</label>
            <input type="text" name="bairro" value={formData.bairro || ''} onChange={handleInputChange} />
            <label>Cidade:</label>
            <input type="text" name="cidade" value={formData.cidade || ''} onChange={handleInputChange} />
            <label>Estado:</label>
            <input type="text" name="estado" value={formData.estado || ''} onChange={handleInputChange} />
            <label>Número:</label>
            <input type="text" name="number" value={formData.number || ''} onChange={handleInputChange} />
            <label>Telefone Celular:</label>
            <input type="text" name="phoneNumber" value={formData.phoneNumber || ''} onChange={handleInputChange} />
              <button onClick={handleSaveClick}>Salvar</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileAdmin;
