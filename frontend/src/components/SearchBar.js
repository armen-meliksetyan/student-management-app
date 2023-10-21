import React, { useEffect, useState } from "react";

function SearchBar({ newData, data, setNewData }) {
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (e) => {
    setWordEntered(e.target.value);
  };

  useEffect(() => {
    newData = data;
    setNewData(data);
    const newFilter = newData.filter((value) => {
      return value.name.toLowerCase().includes(wordEntered.toLowerCase());
    });
    setNewData(newFilter);
  }, [wordEntered]);

  return (
    <div className="row d-flex justify-content-center ">
      <div className="col-md-6">
        <div className="form">
          <input
            type="text"
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
