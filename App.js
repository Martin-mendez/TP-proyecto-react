import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importa Link
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/otra-pagina";
  };

  return (
    <div className="container">
      <h1>Formulario de Ejemplo</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {/* Agrega un Link para redirigir a la otra página */}
      <Link to="/otra-pagina">Ir a Otra Página</Link>
    </div>
  );
}

export default App;

