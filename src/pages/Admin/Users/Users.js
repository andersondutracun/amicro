import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthentication } from '../../../hooks/useAuthentication';
import styles from './Users.module.css';
import { Link } from 'react-router-dom';

const Users = () => {
  const { auth, logout } = useAuthentication(); // Use o hook de autenticação

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://179.209.23.75:3001/admin/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Erro ao carregar usuários:', error);
      }
      setLoading(false);
    };

    loadUsers();
  }, []);

  // Paginar usuários
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Mudar de página
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Função para excluir usuário
  const deleteUser = async userId => {
    // Exibir caixa de diálogo de confirmação
    const confirmDelete = window.confirm("Tem certeza de que deseja excluir este usuário?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://179.209.23.75:3001/admin/users/${userId}`);
        // Recarregar a lista de usuários após a exclusão
        const response = await axios.get('http://179.209.23.75:3001/admin/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Erro ao excluir usuário:', error);
      }
    }
  };

  return (
    <div className='section'>
      <div className='header'>
        <div className='container'>
          <div className='banner'>
            <h1>Usuários</h1>
            <p>Gerencie todos os usuários do site.</p>
          </div>
        </div>
      </div>

      <div className={styles.container}>
       <div className={styles.title}>
       <h2>Lista de Usuários</h2>
        
       </div>
        {loading ? (
          <p className={styles.loading}>Carregando usuários...</p>
        ) : (
          <>
            <table className={styles.usersTable}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Nome</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map(user => (
                  <tr key={user.uid}>
                    <td>{user.uid}</td>
                    <td>{user.email}</td>
                    <td>{user.displayName}</td>
                    <td className={styles.actionCell}>
                    <Link to={`/admin/users/edit/${user.uid}`}>
                        <button className={styles.actionButton}>Editar</button>
                    </Link>
                      <button className={`${styles.actionButton} ${styles.deleteButton}`} onClick={() => deleteUser(user.uid)}>Excluir</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ul className={styles.pagination}>
              {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, i) => (
                <li key={i} className={currentPage === i + 1 ? styles.activePage : null}>
                  <button onClick={() => paginate(i + 1)}>{i + 1}</button>
                </li>
              ))}
            </ul>
          </>
        )}
        
      </div>
    </div>
  );
};

export default Users;
