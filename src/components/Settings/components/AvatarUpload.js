import React, { useState } from 'react';
import { db, storage } from '../../../redux/firebase/firebase';

const AvatarUpload = () => {
  const [image, setImage] = useState(null);
  const updateImage = (e) => {
    e.target.files[0] && setImage(e.target.files[0]);
  };
  const updateUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .gedDownloadURL()
          .then((url) => {
            db.collections('user-info').update({
              userName: 'Ivan',
              moneyLimit: 2300,
              avatar: url,
            });
            setImage(null);
          });
      },
    );
  };

  return (
    <div class="image-upload">
      <label for="file-input">
        <img src="https://icon-library.net/images/upload-photo-icon/upload-photo-icon-21.jpg" />
      </label>
      <input id="file-input" type="file" style={{ display: 'none' }} onChange={updateImage} />
      <button onClick={updateUpload}>upload</button>
    </div>
  );
};

export default AvatarUpload;
