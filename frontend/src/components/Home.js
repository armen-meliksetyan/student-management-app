import React, { useContext, useEffect, useState } from "react";
import List from "./List";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "./SearchBar";
import { Context } from "../App";

const Home = () => {
  const { data, setData } = useContext(Context);
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    setNewData(data);
  }, [data]);
  return (
    <div className="Home">
      <Container>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            <SearchBar newData={newData} data={data} setNewData={setNewData} />
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
      <br />
      <h3>Student Details</h3>
      <List data={newData} />
    </div>
  );
};

export default Home;
