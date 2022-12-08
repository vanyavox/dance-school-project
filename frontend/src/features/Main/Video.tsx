import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import style1 from './video.module.css';

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={style1.video__div}>
      <div className={style1.bg} />
      <button className={style1.btn__modal} onClick={handleOpen}>СМОТРЕТЬ ВИДЕО О ШКОЛЕ</button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={style1.video_container}>
          <iframe width="860" height="415" src="https://www.youtube.com/embed/2p2nengW0OQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
        </Box>
      </Modal>
    </div>
  );
}
