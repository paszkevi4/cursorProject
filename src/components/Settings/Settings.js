import React, { useState, useEffect } from 'react';
import {
  handleFireBaseUploadInfo,
  handleFireBaseUploadAvatar,
} from '../../redux/firebase/profileFB';

// components
import Avatar from './components/AvatarUpload';
import Limits from './components/Limits';
import TextField from '@material-ui/core/TextField';
import PhoneInput from 'react-phone-input-2';
import { Button, FormControlLabel, Switch } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

// styles
import 'react-phone-input-2/lib/material.css';
import style from './Settings.module.css';

const Settings = (props) => {
  const [avatarNew, setAvatarNew] = useState(null);
  const [avatar, setAvatar] = useState(props.avatar);
  const [name, setName] = useState(props.userName);
  const [phone, setPhone] = useState(props.phoneNumber);
  const [showWarning, setWarning] = useState(props.showWarning);
  const [currentMoneyLimit, setCurrentMoneyLimit] = useState(props.moneyLimit);
  const [currentPercentLimit, setCurrentPercentLimit] = useState(props.percentLimit);
  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    setAvatar(props.avatar);
    setName(props.userName);
    setPhone(props.phoneNumber);
    setWarning(props.showWarning);
    setCurrentMoneyLimit(props.moneyLimit);
    setCurrentPercentLimit(props.percentLimit);
  }, [props]);

  const uploadNewData = () => {
    if (avatarNew) {
      handleFireBaseUploadAvatar(
        setAvatarNew,
        avatarNew,
        name,
        phone,
        showWarning,
        currentMoneyLimit,
        currentPercentLimit,
        setShowSaved,
      );
    } else {
      handleFireBaseUploadInfo(
        avatar,
        name,
        phone,
        showWarning,
        currentMoneyLimit,
        currentPercentLimit,
        setShowSaved,
      );
    }
  };

  return (
    <>
      <Avatar img={avatar} updateInState={setAvatarNew} />
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
          <FormControlLabel
            control={
              <Switch
                checked={showWarning}
                onChange={() => {
                  setWarning(!showWarning);
                }}
              />
            }
            label="Warn me when remains:"
          />
        </div>
        <Limits
          title="amount"
          limit={currentMoneyLimit}
          setLimit={setCurrentMoneyLimit}
          step={100}
          disabled={!showWarning}
        />
        <Limits
          title="percent"
          limit={currentPercentLimit}
          setLimit={setCurrentPercentLimit}
          step={5}
          disabled={!showWarning}
        />
        <Button variant="contained" color="primary" onClick={uploadNewData}>
          SAVE
        </Button>
        {showSaved && (
          <Alert style={{ marginTop: '50px' }} variant="outlined" severity="success">
            Your profile has been updated
          </Alert>
        )}
      </div>
    </>
  );
};

export default Settings;
