import React, { useEffect, useState } from "react";
import axios from "axios";

function SearchBar({ newData, data, setNewData }) {
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (e) => {
    setWordEntered(e.target.value);
  };

  useEffect(() => {
    newData = axios.get('http://127.0.0.1:8000/api/usersearch')
    console.log(newData)
  }, [wordEntered]);

  return (
    <div className="row d-flex justify-content-center ">
      <div className="col-md-6">
        <div className="form">
          <input
            action="{{ route('usersearch') }}" method="GET"
            type="text"
            name="search"
            placeholder="Search..."
            className="form-control form-input"
            value={wordEntered}
            onChange={handleFilter}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
