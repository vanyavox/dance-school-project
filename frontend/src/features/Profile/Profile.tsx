import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import style from './Profile.module.css';
import { RootState, useAppDispatch } from '../../store';
import { update } from '../Registration/userSlice';
import { User } from '../Registration/types/UserState';

function Profile(): JSX.Element {
  const [images, setImages] = useState([]);
  const [show, setShow] = useState<boolean>(true);
  const { email, name, surname, age, phone } = useSelector((state: RootState) => state.user);
  const [nameUser, setUserName] = useState(name);
  const [surnameUser, setSurnameUser] = useState(surname);
  const [ageUser, setAgeUser] = useState(age);
  const [emailUser, setEmailUser] = useState(email);
  const [phoneUser, setPhonelUser] = useState(phone);
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();

  const onSubmit = (data: any): void => {
    console.log(data);
    dispatch(update(data));
  };

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ): void => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
    setShow(false);
  };

  return (
    <div className={style.profile}>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}

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
            {show && (
              <Button
                variant="contained"
                style={isDragging ? { color: 'red' } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Загрузить аватарку
              </Button>
            )}
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
                  >Изменить
                  </Button>
                  &nbsp;
                  <Button
                    variant="contained"
                    onClick={() => onImageRemove(index)}
                  >Удалить
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
        <form onSubmit={handleSubmit(onSubmit)}>

          <TextField
            value={nameUser || ''}
            {...register('name')}
            onChange={(event) => setUserName(event.target.value)}
            autoComplete="given-name"
            name="name"
            defaultValue={name}
            required
            fullWidth
            id="firstName"
            label="Имя"
            autoFocus
          />
          &nbsp;
          <TextField
            value={surnameUser || ''}
            {...register('surname')}
            onChange={(event) => setSurnameUser(event.target.value)}
            autoComplete="given-surname"
            name="surname"
            required
            fullWidth
            id="secondName"
            label="Фамилия"
            autoFocus
          />
          &nbsp;
          <TextField
            value={ageUser || ''}
            {...register('age')}
            onChange={(event) => setAgeUser(Number(event.target.value))}
            autoComplete="given-age"
            name="age"
            required
            fullWidth
            id="age"
            label="Возраст"
            autoFocus
          />
          &nbsp;
          <TextField
            value={emailUser || ''}
            {...register('email')}
            onChange={(event) => setEmailUser(event.target.value)}
            autoComplete="given-email"
            name="email"
            required
            fullWidth
            id="email"
            label="Email"
            autoFocus
          />
          &nbsp;
          <TextField
            fullWidth
            label="Телефон"
            id="phone"
            type="tel"
            placeholder="+7 (xxx) xxx-xx-xx"
            pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
            value={phoneUser || ''}
            {...register('phone')}
            onChange={(event) => setPhonelUser(event.target.value)}
          />

          <Button
            variant="contained"
            type="submit"
          >Сохранить изменения
          </Button>
        </form>

      </Box>

    </div>
  );
}
export default Profile;
