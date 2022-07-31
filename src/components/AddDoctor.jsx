import { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AddDoctor = ({ user }) => {
  const [patient, setPatient] = useState([]);

  const [doctorid, setDoctorid] = useState();
  const [submitted, setSubmitted] = useState(false);

  function handleDoctoridChange(e) {
    setDoctorid(e.target.value);
  }

  function handleSubmit(e) {
    axios
      .post(
        "http://localhost:3000/api/v1/patient/update",
        {
          id: patient._id,
          doctor: doctorid,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        setSubmitted(true);
      });

    e.preventDefault();
  }

  async function getUserDetails() {
    const res = await axios.get("http://localhost:3000/api/v1/dashboard", {
      withCredentials: true,
    });
    const response = await axios.get(
      `http://localhost:3000/api/v1/patient/${res.data.user.email}`,
      {
        withCredentials: true,
      }
    );
    setPatient(response.data.patient);
  }
  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className="login d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            {!submitted ? (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Doctorid</Form.Label>
                  <Form.Control
                    type="text"
                    name="doctorid"
                    placeholder="Enter name"
                    value={doctorid}
                    onChange={handleDoctoridChange}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            ) : (
              <div>done</div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddDoctor;
