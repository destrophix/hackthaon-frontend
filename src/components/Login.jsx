import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    axios
      .post(
        "http://localhost:3000/api/v1/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setLoggedIn(res.data.success);
      });

    e.preventDefault();
  }

  return (
    <div className="login d-flex align-items-center bg-secondary bg-gradient text-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            {!loggedIn ? (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Id</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Submit
                </Button>
                <hr></hr>
                <div>
                  <Link to="/signup">
                    <p className="text-light">signup</p>
                  </Link>
                  <div></div>
                  <Link to="/signup">
                    <p className="text-light">forgot password</p>
                  </Link>
                </div>
              </Form>
            ) : (
              <Navigate to="/dashboard" />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
