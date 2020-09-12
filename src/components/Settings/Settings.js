import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import PhoneInput from 'react-phone-input-2';

// styles
import 'react-phone-input-2/lib/material.css';
import style from './Settings.module.css';

const Settings = ({ userName, phoneNumber, showWarning, moneyLimit, percentLimit }) => {
  const [currentMoneyLimit, setCurrentMoneyLimit] = useState(moneyLimit);
  const [currentPercentLimit, setCurrentPercentLimit] = useState(percentLimit);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div className={style.main}>
      <TextField
        fullWidth
        variant="outlined"
        label="Name"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <PhoneInput
        inputStyle={{ width: '100%' }}
        id="phone"
        value={phone}
        country="ua"
        onChange={(e) => setPhone(e)}
      />
      <div>
        <h2>Warn me when remains:</h2>
      </div>
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
