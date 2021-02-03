import React from "react";

function SearchResults(props) {
const employeeData = props.users.map((item) => 
  <tr key={item.phone}>
  <td className="image" data-th="image"><img alt="img" className="img-responsive" src={item.picture.medium}/> </td>
  <td className="name" data-th="name">{item.name.first} {item.name.last}</td>
  <td className="email" data-th="email"><a href={"mailTo:"+item.email }>{item.email}</a></td>
  <td className="phone" data-th="phone">{item.phone}</td>
  {/* <td className="dob" data-th="dob">{item.dob}</td> */}
  </tr>
)

  return (
    <tbody className="table-body"> 
    { employeeData } 
    </tbody>
  );
}

export default SearchResults;