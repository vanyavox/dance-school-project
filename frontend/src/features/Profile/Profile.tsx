import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button, { ButtonProps } from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useForm } from 'react-hook-form';
import { Input } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import style from './Profile.module.css';
import { RootState, useAppDispatch } from '../../store';
import { addAsyncAvatar, update } from '../Registration/userSlice';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((
  props,
  ref,
) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

function Profile(): JSX.Element {
  const [images, setImages] = useState([]);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const { email, name, surname, age, phone, image, partner_id, user_points } = useSelector((state: RootState) => state.user);
  const [nameUser, setUserName] = useState(name);
  const [surnameUser, setSurnameUser] = useState(surname);
  const [ageUser, setAgeUser] = useState(age);
  const [emailUser, setEmailUser] = useState(email);
  const [phoneUser, setPhonelUser] = useState(phone);
  const [partner, setPartner] = useState(partner_id);
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
  console.log('test');

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
      {!show && (
        <>
          <span><h2>Мой профиль</h2></span>
          <div className={style.container}>
            &nbsp;
            <div className={style.item}>
              <Avatar
                alt="avatar"
                src={url || ''}
                sx={{ width: 200, height: 200 }}
              />
            </div>
            <div className={style.list}>
              <h2>
                <div className={style.item}>Имя: {name}</div>
                <div className={style.item}>Фамилия: {surname}</div>
                <div className={style.item}>Возраст: {age}</div>
                <div className={style.item}>Email: {email}</div>
                <div className={style.item}>Телефон: {phone}</div>
                <div className={style.item}>Партнер по танцам: {partner_id}</div>
                <div className={style.item}>Рейтинговые очки: {user_points}</div>
              </h2>
            </div>
          </div>
          &nbsp;
          <Fab color="secondary" aria-label="edit">
            <EditIcon type="button" onClick={() => setShow((p) => !p)} />
          </Fab>

        </>
      )}
      {
        show && (
          <div className={style.editprofile}>
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
            <Box>
              <form onSubmit={handleSubmit(onSubmit)}>

                <TextField
                  value={nameUser || ''}
                  {...register('name')}
                  onChange={(event) => setUserName(event.target.value)}
                  name="name"
                  defaultValue={name}
                  required
                  id="firstName"
                  label="Имя"
                  autoFocus
                  sx={{ width: 300 }}
                />
                &nbsp;
                <TextField
                  value={surnameUser || ''}
                  {...register('surname')}
                  onChange={(event) => setSurnameUser(event.target.value)}
                  name="surname"
                  required
                  sx={{ width: 300 }}
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
                  sx={{ width: 300 }}
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
                  sx={{ width: 300 }}
                  id="email"
                  label="Email"

                />
                &nbsp;
                <TextField
                  sx={{ width: 300 }}
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
                &nbsp;
                <TextField
                  sx={{ width: 300 }}
                  label="Партнер по танцам"
                  required
                  id="partner"
                  type="text"
                  placeholder="Имя партнера по танцам"
                  value={partner || ''}
                  {...register('partner_id')}
                  onChange={(event) => setPartner(event.target.value)}
                />
                &nbsp;
                <ColorButton
                  variant="contained"
                  type="submit"
                >Сохранить изменения
                </ColorButton>
                &nbsp;
                <ColorButton
                  variant="contained"
                  type="submit"
                  onClick={() => setShow((p) => !p)}
                >Назад
                </ColorButton>
              </form>
              <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  Данные профиля успешно сохранены!
                </Alert>
              </Snackbar>
            </Box>
          </div>
        )
      }
    </div>
  );
}
export default Profile;
