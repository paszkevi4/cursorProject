import React, { useState, useEffect } from 'react';
import { db, storage } from '../../redux/firebase/firebase';

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
  const [avatar, setAvatar] = useState(props.avatar);
  const [avatarNew, setAvatarNew] = useState(null);
  const [name, setName] = useState(props.userName);
  const [phone, setPhone] = useState(props.phoneNumber);
  const [showWarning, setWarning] = useState(props.showWarning);
  const [currentMoneyLimit, setCurrentMoneyLimit] = useState(props.moneyLimit);
  const [currentPercentLimit, setCurrentPercentLimit] = useState(props.percentLimit);
  const [showSaved, setShowSaved] = useState(false);

  window.avatar = avatarNew;

  useEffect(() => {
    setAvatar(props.avatar);
    setName(props.userName);
    setPhone(props.phoneNumber);
    setWarning(props.showWarning);
    setCurrentMoneyLimit(props.moneyLimit);
    setCurrentPercentLimit(props.percentLimit);
  }, [props]);

  useEffect(() => {
    db.collection('user-info').onSnapshot((ss) => {
      props.updateUser(ss.docs[0].data());
    });
  }, []);

  const handleFireBaseUploadInfo = () => {
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 2000);
    db.collection('user-info')
      .doc('INFO')
      .set({
        avatar: avatar,
        userName: name,
        phoneNumber: phone,
        showWarning: showWarning,
        moneyLimit: currentMoneyLimit,
        percentLimit: currentPercentLimit,
      })
      .then(() => {
        console.log('Document successfully written without avatar!');
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  };

  const handleFireBaseUploadAvatar = (e) => {
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 2000);
    const uploadTask = storage.ref(`images/avatar.jpg`).put(avatarNew);
    console.log('start of upload');
    uploadTask.on('state_changed', () => {
      storage
        .ref('images')
        .child(`avatar.jpg`)
        .getDownloadURL()
        .then((url) => {
          db.collection('user-info')
            .doc('INFO')
            .set({
              avatar: url,
              userName: name,
              phoneNumber: phone,
              showWarning: showWarning,
              moneyLimit: currentMoneyLimit,
              percentLimit: currentPercentLimit,
            })
            .then(() => {
              console.log('Document successfully written with avatar!');
            })
            .catch((error) => {
              console.error('Error: ', error);
            });
          setAvatarNew(null);
        });
    });
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

        <Button
          variant="contained"
          color="primary"
          onClick={avatarNew ? handleFireBaseUploadAvatar : handleFireBaseUploadInfo}>
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

// // Add a new document in collection "cities"
// const littleUpdate = () => {
//   db.collection('user-info')
//     .doc('NEW')
//     .set({
//       userName: 'Avocado',
//       moneyLimit: 2500,
//       avatar: imageAsFile,
//     })
//     .then(function () {
//       console.log('Document successfully written!');
//     })
//     .catch(function (error) {
//       console.error('Error writing document: ', error);
//     });
// };

// const updateUpload = () => {
//   const uploadTask = storage.ref(`images/${imageAsFile.name}`).put(imageAsFile);

//   uploadTask.on(
//     'state_changed',
//     (snapshot) => {},
//     (error) => {
//       console.log(error);
//     },
//     () => {
//       storage
//         .ref('images')
//         .child(imageAsFile.name)
//         .getDownloadURL()
//         .then((url) => {
//           db.collection('user-info')
//             .add({
//               userName: 'Ivan',
//               moneyLimit: 2300,
//               avatar: url,
//             })
//             .then(function () {
//               console.log('Document successfully written!');
//             });
//           // db.collection('user-info')
//           //   .doc('NEW')
//           //   .set({
//           //     userName: 'Ivan',
//           //     moneyLimit: 2500,
//           //   })
//           //   .then(function () {
//           //     console.log('Document successfully written!');
//           //   })
//           //   .catch(function (error) {
//           //     console.error('Error writing document: ', error);
//           //   });
//           setImage(null);
//         });
//     },
//   );
// };
