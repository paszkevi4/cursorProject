import React from "react";
import Category from "./Category";

const Charges = ({ props }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Category</td>
            <td>Description</td>
            <td>Date</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {[
            ...props.map((el, i) => (
              <Category
                name={el.name}
                description={el.description}
                date={el.date}
                icon={el.icon}
                key={i}
              />
            )),
          ]}
        </tbody>
      </table>
    </div>
  );
};

export default Charges;
