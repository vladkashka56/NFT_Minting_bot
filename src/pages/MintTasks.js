import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import TaskList from '../components/TaskList';
import CreateMintTask from './CreateMintTask';
import Footer from '../components/Footer';

export default function MintTasks() {
  const [created, setCreated] = useState(false);
  const [tasks, setTasks] = useState([]);
  // const [startAll, setStartAll] = useState(false);
  // const [stopAll, setStopAll] = useState(false);
  // const [deleteAll, setDeleteAll] = useState(false);

  const delTask = task => {
    const restTasks = tasks.filter(item => item.id !== task.id);
    console.log(restTasks);
    setTasks(restTasks);
    localStorage.setItem('tasks', JSON.stringify(restTasks));
  }

  const setDeleteAll = task => {
    setTasks([]);
    localStorage.setItem('tasks', JSON.stringify([]));
  }

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem('tasks')));
    if (tasks === null) {
      localStorage.setItem('tasks', JSON.stringify([]));
    }
  }, []);

  return (
    <div className='minttasks'>
      <div className='flex justify-between items-center mb-10'>
        <Typography variant="h3" gutterBottom component="div" sx={{color: '#383838'}}>Tasks</Typography>
        {/* <div className='coin-btn-group'>
          <Stack spacing={2} direction="row">
            <Button variant="contained" sx={{ backgroundColor: '#151419' }}>ETH</Button>
            <Button variant="contained" sx={{ backgroundColor: '#151419' }}>SOL</Button>
            <Button variant="contained" sx={{ backgroundColor: '#151419' }}>KLAY</Button>
          </Stack>
        </div> */}
      </div>
      {
        created
        ? <CreateMintTask setTasks={(tasks)=>setTasks(tasks)} setCreated={()=>setCreated(false)} />
        : <>
            <TaskList tasks={tasks} delTask={(task)=>delTask(task)} />
            <Footer setCreated={()=>setCreated(true)} setDeleteAll={()=>setDeleteAll(true)} />
          </>
      }
    </div>
  )
}
