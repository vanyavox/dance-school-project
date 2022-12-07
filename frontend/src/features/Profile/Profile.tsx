import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useForm } from 'react-hook-form';
import { Input } from '@mui/material';
import style from './Profile.module.css';
import { RootState, useAppDispatch } from '../../store';
import { addAsyncAvatar, update } from '../Registration/userSlice';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((
  props,
  ref,
) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

function Profile(): JSX.Element {
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const { email, name, surname, age, phone, image } = useSelector((state: RootState) => state.user);
  const [nameUser, setUserName] = useState(name);
  const [surnameUser, setSurnameUser] = useState(surname);
  const [ageUser, setAgeUser] = useState(age);
  const [emailUser, setEmailUser] = useState(email);
  const [phoneUser, setPhonelUser] = useState(phone);
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();

  const onSubmit = (data: any,): void => {
    dispatch(update(data));
    setOpen(true);
  };
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleChangleFile = (event: any): void => {
    setImages(event.target.value);
    const pictures = [...event.target.files];
    const newFile = new FormData();
    pictures.forEach((img) => {
      newFile.append('avatar', img);
    });
    dispatch(addAsyncAvatar(newFile));
  };
  const url = `http://localhost:4000${image}`;

  return (
    <div className={style.profile}>
      <Avatar
        alt="avatar"
        src={url || ''}
        sx={{ width: 200, height: 200 }}
      />
      <Input
        value=""
        name="avatar"
        type="file"
        onChange={handleChangleFile}
        required
      />
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
            name="email"
            required
            fullWidth
            id="email"
            label="Email"

          />
          &nbsp;
          <TextField
            fullWidth
            label="Телефон"
            required
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
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Данные профиля успешно сохранены!
          </Alert>
        </Snackbar>
      </Box>

    </div>
  );
}
export default Profile;
