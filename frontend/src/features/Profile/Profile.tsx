import React from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import style from './Profile.module.css';

function Profile() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
    <div className={style.profile}>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          <div className="upload__image-wrapper">
            <Button
              variant="contained"
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Загрузить аватарку
            </Button>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <Avatar
                  alt="Your avatar"
                  src={image.dataURL}
                  sx={{ width: 200, height: 200 }}
                />
                <div className="image-item__btn-wrapper">
                  <Button
                    variant="contained"
                    onClick={() => onImageUpdate(index)}
                  >Update
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => onImageRemove(index)}
                  >Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>

        )}
      </ImageUploading>
      <br />
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
        <TextField fullWidth label="Имя" id="name" />
        &nbsp;
        <TextField fullWidth label="Фамилия" id="surname" />
        &nbsp;
        <TextField fullWidth label="Возраст" id="age" />
        &nbsp;
        <TextField fullWidth label="email" id="email" type="email" />
        &nbsp;
        <TextField fullWidth label="Телефон" id="phone" type="phone" />
      </Box>
      &nbsp;
      <Button
        variant="contained"
      >Сохранить изменения
      </Button>
    </div>
  );
}
export default Profile;
