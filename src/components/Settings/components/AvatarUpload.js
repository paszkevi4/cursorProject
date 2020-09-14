import React from 'react';
import style from '../Settings.module.css';

const AvatarUpload = ({ img, updateInState }) => {
  const updateImage = (e) => {
    e.target.files[0] && updateInState(e.target.files[0]);
  };

  return (
    <div className={style.avatar}>
      <label htmlFor="file-input" className={style.avatar_inner}>
        <img src={img} alt="avatar" />
      </label>
      <input id="file-input" type="file" style={{ display: 'none' }} onChange={updateImage} />
    </div>
  );
};

export default AvatarUpload;

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

// const handleFireBaseUpload = (e) => {
//   e.preventDefault();
//   console.log('start of upload');
//   // async magic goes here...
//   const uploadTask = storage.ref(`images/${imageAsFile.name}`).put(imageAsFile);
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
