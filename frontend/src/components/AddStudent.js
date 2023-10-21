import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AddStudent = () => {
  const navigate = useNavigate();
  const clickToBackHandler = () => {
    navigate("/");
  };
  const [userField, setUserField] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const changeUserFieldHandler = (e) => {
    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
      if (
        !userField.name ||
        !userField.username ||
        !userField.email ||
        !userField.password
      ) {
        toast.error("Please fill in all the required fields!");
        return;
      }

      if (userField.password.length < 6) {
        toast.error("Password should be at least 6 characters long!");
        return;
      }

      const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      if (!emailRegex.test(userField.email)) {
        toast.error("Please enter a valid email address!");
        return;
      }

      const response = await axios.post(
        "http://127.0.0.1:8000/api/addnew",
        userField
      );
      console.log(response);
      setTimeout(() => {
        window.location.reload();
      }, 5000);
      toast.success("Student added successfully!");
    } catch (err) {
      toast.error("Username amd email must be unique!");
    }
  };

  return (
    <div className="AddStudent">
      <ToastContainer />
      <h3>Student Registration Form</h3>
      <Container sm={3}>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Full Name"
                id="name"
                name="name"
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Username"
                id="username"
                name="username"
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                onChange={(e) => changeUserFieldHandler(e)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                onChange={(e) => changeUserFieldHandler(e)}
                required
              />
            </Form.Group>
            <Button type="submit" size="lg" onClick={(e) => onSubmitChange(e)}>
              Submit
            </Button>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
      <br />
      <button className="btn btn-primary" onClick={clickToBackHandler}>
        Back To Home
      </button>
    </div>
  );
};

export default AddStudent;
