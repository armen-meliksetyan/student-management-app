import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import View from "./components/View";
import Edit from "./components/Edit";
import NavBar from "./components/NavBar";
import AddStudent from "./components/AddStudent";

export const Context = createContext([]);

function App() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/users")
      .then((res) => res.json())
      .then((res) => setData(res.results));
  }, []);

  return (
    <div className="App">
      <Context.Provider value={{ data, setData }}>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/add" element={<AddStudent />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/view/:id" element={<View />} />
            <Route exact path="/edit/:id" element={<Edit />} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
