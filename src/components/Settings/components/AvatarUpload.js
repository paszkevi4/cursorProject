import React from 'react';

const AvatarUpload = () => {
  return (
    <div class="image-upload">
      <label for="file-input">
        <img src="https://icon-library.net/images/upload-photo-icon/upload-photo-icon-21.jpg" />
      </label>

      <input id="file-input" type="file" style={{ display: 'none' }} />
    </div>
  );
};

export default AvatarUpload;
