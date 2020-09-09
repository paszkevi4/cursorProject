import React from 'react';

export const Temp = (props) => {
  return (
    <div>
      {Object.values(props.icons)}
      {props.icons[0]}
      <div>123</div>
    </div>
  );
};
