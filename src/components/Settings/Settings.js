import React from 'react';

const Settings = (props) => {
  return (
    <div>
      <div>{props.userName}</div>
      <div>{props.phoneNumber}</div>
      <div>{props.limit}</div>
      <div>{props.showWarning ? 'warn' : 'not to warn'}</div>
    </div>
  );
};

export default Settings;
