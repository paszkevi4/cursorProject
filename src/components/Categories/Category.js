import React from "react";

const Category = ({ name, description, date, icon }) => {
  return (
    <tr>
      <td>
        {icon}
        {name}
      </td>
      <td>{description}</td>
      <td>{date}</td>
      <td>
        <button>:</button>
      </td>
    </tr>
  );
};

export default Category;
