import React from "react";

function Search(props) {
    return (
      <form className="search">
        <div className="form-group">
          <label htmlFor="employee">Search:</label>
          <input
            value={props.search}
            onChange={props.handleInputChange}
            name="search"
            list="employee"
            type="text"
            className="form-control"
            placeholder="Type in a letter to begin"
            id="search"
          />
        </div>
      </form>
    );
  }
  
  export default Search;