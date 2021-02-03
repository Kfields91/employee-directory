import React from "react";
import SearchResults from "./SearchResults";


function Table(props) {
  
    return (
    <table className="table table-striped bordered hover table-fluid" id="table">
      <thead>
      <tr>
      <th className="img-heading"> Image </th>
      <th className="name-heading">name</th>
      <th className="email-heading">email</th>
      <th className="phone-heading">phone</th>
      {/* <th className="dob-heading">dob</th> */}
      </tr>
      </thead>
      
      <SearchResults users={props.users} key={props.phone}/>

    </table>
  )
}

export default Table;