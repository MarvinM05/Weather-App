import React, { useState } from "react";

const Form = ({ submitSearch }) => {
  const [city, setCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (city === "" || !city) return;
    submitSearch(city);
  };

  return (
    <div>
      <form className="search-box" onSubmit={onSubmit}>
        <div className="input-group">
          <span className="icon">
            <i className="bx bx-search"></i>
          </span>
          <input
            type="text"
            className="input"
            placeholder="Buscar una ciudad"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Form
