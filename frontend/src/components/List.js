import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";

const List = ({ data }) => {
  const [userData, setUserData] = useState(data);

  useEffect(() => {
    setUserData(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      console.log(id);
      await axios.delete(`http://127.0.0.1:8000/api/usersdelete/${id}`);
      const newUserData = userData.filter((item) => item.id !== id);
      setUserData(newUserData);
      setTimeout(() => {
        window.location.reload();
      }, 5000);
      toast.success("Student deleted successfully!");
    } catch (err) {
      console.log("Error deleting user:", err);
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Student No.</th>
            <th>Full Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <ButtonToolbar className="d-flex justify-content-center">
                    <ButtonGroup className="me-2 mb-2">
                      <NavLink
                        to={`/view/${user.id}`}
                        className="btn btn-outline-info"
                      >
                        View <FaRegEye style={{ marginBottom: 3 }} />
                      </NavLink>
                    </ButtonGroup>
                    <ButtonGroup className="me-2 mb-2">
                      <NavLink
                        to={`/edit/${user.id}`}
                        className="btn btn-warning"
                      >
                        Edit <BiEdit style={{ marginBottom: 3 }} />
                      </NavLink>
                    </ButtonGroup>
                    <ButtonGroup className="me-2 mb-2">
                      <Button
                        onClick={() => handleDelete(user.id)}
                        variant="danger"
                      >
                        Delete <RiDeleteBin6Line style={{ marginBottom: 3 }} />
                      </Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default List;
