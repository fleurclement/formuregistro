import React, { useState } from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';
import { Container } from 'react-bootstrap';

const Registro = () => {
  const [alert, setAlert] = useState({ message: '', variant: '' });

  return (
    <Container>
      <h2>Registro</h2>
      <SocialButton icon="fab fa-github" />
      <SocialButton icon="fab fa-twitter"  />
      <SocialButton icon="fab fa-linkedin" />
      <Formulario setAlert={setAlert} />
      {alert.message && <Alert message={alert.message} variant={alert.variant} />}
    </Container>
  );
};

export default Registro;
