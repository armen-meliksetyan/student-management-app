import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { ToastContainer, toast } from "react-toastify";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const clickToBackHandler = () => {
    navigate("/");
  };

  const [userField, setUserField] = useState({
    name: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:8000/api/users/" + id);
      setUserField(result.data.users);
    } catch (err) {
      console.log("Something went wrong");
    }
  };

  const changeUserFieldHandler = (e) => {
    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
    console.log(userField);
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

      await axios.put("http://127.0.0.1:8000/api/usersupdate/" + id, userField);
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 5000);
      toast.success("Student details updated successfully!");
    } catch (err) {
      console.log("Username amd email must be unique!");
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <h3>Edit Form</h3>
      <Container sm={3}>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            <form>
              <div className="mb-3 mt-3">
                <label className="form-label"> ID:</label>
                <input
                  type="text"
                  className="form-control"
                  id="id"
                  placeholder="Enter Your Full Name"
                  name="id"
                  value={id}
                  disabled
                />
              </div>
              <div className="mb-3 mt-3">
                <label className="form-label"> Full Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Full Name"
                  name="name"
                  value={userField.name}
                  onChange={(e) => changeUserFieldHandler(e)}
                />
              </div>
              <div className="mb-3 mt-3">
                <label className="form-label"> Username:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Username"
                  name="username"
                  value={userField.username}
                  onChange={(e) => changeUserFieldHandler(e)}
                />
              </div>
              <div className="mb-3 mt-3">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                  value={userField.email}
                  onChange={(e) => changeUserFieldHandler(e)}
                />
              </div>
              <div className="mb-3 mt-3">
                <label className="form-label">Password:</label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  name="password"
                  value={userField.password}
                  onChange={(e) => changeUserFieldHandler(e)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => onSubmitChange(e)}
              >
                Update
              </button>
            </form>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
      <br />
      <div className="container d-flex justify-content-center">
        <button className="btn btn-primary" onClick={clickToBackHandler}>
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default Edit;
