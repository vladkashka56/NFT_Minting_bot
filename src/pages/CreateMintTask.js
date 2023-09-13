import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import TaskForm from '../components/TaskForm';
import { getContract } from '../components/utils';
import { toast } from 'react-toastify';

export default function CreateMintTask(props) {
  const [next, setNext] = useState(false);
  const [contractAddress, setContractAddress] = useState('');
  const [contract, setContract] = useState('');

  const handleInput = async () => {
    if (contractAddress.slice(0, 2) === '0x' && contractAddress.length === 42) {
      const contract = await getContract(contractAddress);
      console.log(contract)
      if (contract !== 'unverified') {
        toast.success("Load contract successfully", {
          theme: "colored",
          pauseOnHover: false,
          position: toast.POSITION.TOP_RIGHT
        });
        setContract(contract);
        setNext(true);
      } else {
        toast.error("Contract source code not verified", {
          theme: "colored",
          pauseOnHover: false,
          position: toast.POSITION.TOP_RIGHT
        });
      }
    } else {
      toast.error("Invalid Address format", {
        theme: "colored",
        pauseOnHover: false,
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const setTasks = (tasks) => {
    props.setTasks(tasks);
  }

  return (
    <div className='create-task'>
      <div className='flex justify-between items-center mb-10'>
        <Typography variant="h5" gutterBottom component="div" sx={{color: '#383838'}}>Create Task</Typography>
        <Fab size="small" aria-label="add" onClick={props.setCreated}>
          <CloseIcon />
        </Fab>
      </div>
      <p className='mb-1 font-medium text-neutral-700'>Contract Address</p>
      <input type="text" className="form-input w-full px-4 py-3 mb-5 rounded-md" onChange={e => setContractAddress(e.target.value)} />
      {
        next ? <TaskForm setTasks={(tasks)=>setTasks(tasks)} createTasks={props.setCreated} contractAddress={contractAddress} contract={contract}/> : ''
      }
      <div className={next ? 'hidden' : ''}>
        <Button
          color='primary'
          variant="contained"
          fullWidth
          sx={{ padding: 1, marginTop: 5, marginBottom: 5 }}
          onClick={handleInput}
        >Next</Button>
      </div>
    </div>
  )
}
