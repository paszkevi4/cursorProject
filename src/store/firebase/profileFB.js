import { db, storage } from './firebase';

export const handleFireBaseUploadInfo = (
  avatar,
  name,
  phone,
  showWarning,
  currentMoneyLimit,
  currentPercentLimit,
  setShowSaved,
) => {
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

export const handleFireBaseUploadAvatar = (
  setAvatarNew,
  avatarNew,
  name,
  phone,
  showWarning,
  currentMoneyLimit,
  currentPercentLimit,
  setShowSaved,
) => {
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
