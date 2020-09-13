import React, { useState } from 'react';
import { db, storage } from '../../../redux/firebase/firebase';

const AvatarUpload = () => {
  const [imageAsFile, setImage] = useState(null);
  window.imageAsFile = imageAsFile;
  const updateImage = (e) => {
    e.target.files[0] && setImage(e.target.files[0]);
  };
  const updateUpload = () => {
    const uploadTask = storage.ref(`images/${imageAsFile.name}`).put(imageAsFile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((url) => {
            db.collection('user-info')
              .add({
                userName: 'Ivan',
                moneyLimit: 2300,
                avatar: url,
              })
              .then(function () {
                console.log('Document successfully written!');
              });
            // db.collection('user-info')
            //   .doc('NEW')
            //   .set({
            //     userName: 'Ivan',
            //     moneyLimit: 2500,
            //   })
            //   .then(function () {
            //     console.log('Document successfully written!');
            //   })
            //   .catch(function (error) {
            //     console.error('Error writing document: ', error);
            //   });
            setImage(null);
          });
      },
    );
  };

  const handleFireBaseUpload = (e) => {
    e.preventDefault();
    console.log('start of upload');
    // async magic goes here...
    const uploadTask = storage.ref(`images/${imageAsFile.name}`).put(imageAsFile);
  };

  // Add a new document in collection "cities"
  const littleUpdate = () => {
    db.collection('user-info')
      .doc('NEW')
      .set({
        userName: 'Avocado',
        moneyLimit: 2500,
        avatar: imageAsFile,
      })
      .then(function () {
        console.log('Document successfully written!');
      })
      .catch(function (error) {
        console.error('Error writing document: ', error);
      });
  };

  return (
    <div class="image-upload">
      <label for="file-input">
        <img src="https://icon-library.net/images/upload-photo-icon/upload-photo-icon-21.jpg" />
      </label>
      <input id="file-input" type="file" style={{ display: 'none' }} onChange={updateImage} />
      <input id="file" type="file" onChange={updateImage} />
      <button onClick={updateUpload}>upload</button>
    </div>
  );
};

export default AvatarUpload;
