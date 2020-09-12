import React, { useState } from 'react';

const Settings = ({ userName, phoneNumber, showWarning, moneyLimit, percentLimit }) => {
  const [currentMoneyLimit, setCurrentMoneyLimit] = useState(moneyLimit);
  const [currentPercentLimit, setCurrentPercentLimit] = useState(percentLimit);
  return (
    <div>
      <h2>Warn me when remains:</h2>
      <div>
        <h3>
          Remain amount
          <button
            onClick={() => {
              setCurrentMoneyLimit(currentMoneyLimit - 100);
            }}>
            less
          </button>
          <button
            onClick={() => {
              setCurrentMoneyLimit(currentMoneyLimit + 100);
            }}>
            more
          </button>
        </h3>
        {currentMoneyLimit}
      </div>
      <div>
        <h3>
          Remain percent
          <button
            onClick={() => {
              setCurrentPercentLimit(currentPercentLimit - 5);
            }}>
            less
          </button>
          <button
            onClick={() => {
              setCurrentPercentLimit(currentPercentLimit + 5);
            }}>
            more
          </button>
        </h3>
        {currentPercentLimit}
      </div>
      <button>SAVE</button>
    </div>
  );
};

export default Settings;
