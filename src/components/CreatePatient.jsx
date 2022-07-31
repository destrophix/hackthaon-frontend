import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CreatePatient = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [id, setId] = useState();

  function handleName(e) {
    setName(e.target.value);
  }

  function handleAge(e) {
    setAge(e.target.value);
  }

  function handleCity(e) {
    setCity(e.target.value);
  }

  function handleState(e) {
    setState(e.target.value);
  }

  function handleSubmit(e) {
    axios
      .post(
        "http://localhost:3000/api/v1/patient/create",
        {
          name,
          age,
          address: {
            city,
            state,
          },
          doctors: [],
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        setId(res.data.patient._id);
      });
    console.log("click");

    e.preventDefault();
  }
  return (
    <div className="login d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            {!id ? (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={handleName}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    name="age"
                    placeholder="Enter age"
                    value={age}
                    onChange={handleAge}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    placeholder="Enter city"
                    value={city}
                    onChange={handleCity}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    name="state"
                    placeholder="Enter state"
                    value={state}
                    onChange={handleState}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            ) : (
              //   <Navigate to="/dashboard" />
              <div>{id}</div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreatePatient;
