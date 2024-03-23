import React, { useState } from 'react';
import axios from 'axios';
import styles from './Form.module.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    subject: '',
    message: '',
  });
  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://api.elasticemail.com/v2/email/send', {
        apiKey: '680E72B4D033E125073A3441983D122801A5A2856E78D456C9662B9002A0240CF41861CE4C2E0CFB980A532206511F69',
        to: [{ Email: 'anderson.dutra18@gmail.com' }],
        subject: formData.subject,
        from: { Email: formData.email },
        body: { Text: formData.message },
      });

      if (response.data.success) {
        setSuccessMessage('E-mail enviado com sucesso!');
        setFormData({
          name: '',
          email: '',
          telephone: '',
          subject: '',
          message: '',
        });
      } else {
        setFormError('Erro ao enviar e-mail. Por favor, tente novamente mais tarde.');
      }
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      setFormError('Erro ao enviar e-mail. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <div className={styles.w_form}>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          E-mail:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Numero de Telefone (Whatsapp):
          <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} />
        </label>
        <label>
          Assunto:
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
        </label>
        <label>
          Mensagem:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <button type="submit" className='btn'>Enviar E-mail</button>
      </form>
      {formError && <p>{formError}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default ContactForm;
