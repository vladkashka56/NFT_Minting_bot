import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import '../App.css';

export default function Header(props) {
  const [created, setCreated] = useState(false);
  const [startAll, setStartAll] = useState(false);
  const [stopAll, setStopAll] = useState(false);
  const [deleteAll, setDeleteAll] = useState(false);

  const setFlag = (flag) => {
    switch (flag) {
      case 'create':
        setCreated(true);
        props.setCreated();
        break;
      case 'startall':
        setStartAll(true);
        props.setStartAll();
        break;
      case 'stopall':
        setStopAll(true);
        props.setStopAll();
        break;
      case 'deleteall':
        setDeleteAll(true);
        props.setDeleteAll();
        break;
      default:
        break;
    }
  }

  return (
    <div className='footer mt-10'>
      <Stack direction="row" spacing={2}>
        <Button variant='contained' onClick={() => setFlag('create')}>Create New ETH Task</Button>
        <Button variant="contained" color='success' onClick={() => setFlag('startall')}>Start All</Button>
        <Button variant='contained' color='error' onClick={() => setFlag('stopall')}>Stop All</Button>
        <Button variant='contained' color='secondary' onClick={() => setFlag('deleteall')}>Delete All</Button>
      </Stack>
    </div>
  );
};
