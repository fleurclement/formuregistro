import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


const Formulario = ({ setAlert }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
      setAlert({ message: 'El formato del correo electrónico es incorrecto.', variant: 'danger' });
    } else if (password !== confirmPassword) {
      setAlert({ message: 'Las contraseñas no coinciden.', variant: 'danger' });
    } else {
      setAlert({ message: 'Registro exitoso.', variant: 'success' });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" defaultValue="Mark" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </Form.Group>

      <Form.Group controlId="formConfirmPassword">
        <Form.Label>Confirmar Contraseña</Form.Label>
        <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
      </Form.Group>

      <Button variant="primary" type="submit">Registrarse</Button>
    </Form>
  );
};

export default Formulario;
