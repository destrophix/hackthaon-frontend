import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CreateDoctor = () => {
  const [name, setName] = useState();
  const [specialization, setSpecialization] = useState();
  const [recommended, setRecommended] = useState();
  const [alternative, setAlternative] = useState();
  const [id, setId] = useState();

  function handleName(e) {
    setName(e.target.value);
  }

  function handleSpecialization(e) {
    setSpecialization(e.target.value);
  }

  function handleRecommended(e) {
    setRecommended(e.target.value);
  }

  function handleAlternative(e) {
    setAlternative(e.target.value);
  }

  function handleSubmit(e) {
    axios
      .post(
        "http://localhost:3000/api/v1/doctor/create",
        {
          name,
          specialization,
          medicine: {
            recommended,
            alternative,
          },
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        setId(res.data.doctor._id);
      });

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
                  <Form.Label>Specialization</Form.Label>
                  <Form.Control
                    type="text"
                    name="specialization"
                    placeholder="Enter specialization"
                    value={specialization}
                    onChange={handleSpecialization}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Recommended Medicine</Form.Label>
                  <Form.Control
                    type="text"
                    name="recommended"
                    placeholder="Enter recommended medicine"
                    value={recommended}
                    onChange={handleRecommended}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Alternative Medicine</Form.Label>
                  <Form.Control
                    type="text"
                    name="alternative"
                    placeholder="Enter alternative"
                    value={alternative}
                    onChange={handleAlternative}
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

export default CreateDoctor;
