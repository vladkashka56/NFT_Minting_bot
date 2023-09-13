import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import WalletList from '../components/WalletList';
import uniqid from 'uniqid';

export default function TaskForm(props) {
  const [taskName, setTaskName] = useState('');
  const [mintPice, setMintPice] = useState('');
  const [mintFunction, setMintFunction] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [maxGasFee, setMaxGasFee] = useState(100);
  const [maxPriorityGasFee, setMaxPriorityGasFee] = useState(60);
  const [wallets, setWallets] = useState([]);
  const [selWallets, setSelWallets] = useState([]);
  const {contractAddress} = props;

  const createMintTask = () => {
    const oldTasks = JSON.parse(localStorage.getItem('tasks'))
    const task = {id: uniqid(), taskName, mintPice, mintFunction, quantity, maxGasFee, maxPriorityGasFee, contractAddress, selWallets };
    const newTasks = [...oldTasks, task];
    localStorage.setItem('tasks', JSON.stringify(newTasks))
    props.createTasks();
    props.setTasks(newTasks);
  }

  useEffect(() => {
    const oldTasks = JSON.parse(localStorage.getItem('tasks'));
    if (oldTasks === null) localStorage.setItem('tasks', JSON.stringify([]));
  }, []);

  useEffect(() => {
    setWallets(JSON.parse(localStorage.getItem('wallets')));
    if (wallets === null) {
      localStorage.setItem('wallets', JSON.stringify([]));
    }
  }, []);

  return (
      <div className="task-form">
        <div className='grid grid-cols-2 gap-8'>
          <div>
            <p className='font-bold	mb-1 font-medium text-neutral-700'>Name</p>
            <input type="text" className="form-input w-full rounded-md px-4 py-3 mb-5" onChange={e => setTaskName(e.target.value)} />
          </div>
          <div>
            <p className='font-bold	mb-1 font-medium text-neutral-700'>Price</p>
            <input type="text" className="form-input w-full rounded-md px-4 py-3 mb-3" onChange={e => setMintPice(e.target.value)} />
          </div>
          <div className='col-start-1 col-end-3'>
            <p className='font-bold	mb-1 font-medium text-neutral-700'>Mint Function</p>
            <input type="text" className="form-input w-full rounded-md px-4 py-3 mb-3" onChange={e => setMintFunction(e.target.value)} />
          </div>
          <div>
            <p className='font-bold	mb-1 font-medium text-neutral-700'>Quantity</p>
            <input type="number" className="form-input w-full rounded-md px-4 py-3 mb-3" defaultValue={1} onChange={e => setQuantity(e.target.value)} />
          </div>
          <div className='col-start-1 col-end-3'><hr></hr></div>
          <div>
            <p className='font-bold	mb-1 font-medium text-neutral-700'>Max Fee Per Gas</p>
            <input type="number" placeholder='Amount in gwei' className="form-input w-full rounded-md px-4 py-3 mb-3" onChange={e => setMaxGasFee(e.target.value)} />
            <p className='mb-1 text-neutral-600'>Fee per gas data returned by ether.js</p>
          </div>
          <div>
            <p className='font-bold	mb-1 font-medium text-neutral-700'>Max Priority Fee Per Gas</p>
            <input type="number" placeholder='Amount in gwei' className="form-input w-full rounded-md px-4 py-3 mb-3" onChange={e => setMaxPriorityGasFee(e.target.value)} />
            <p className='mb-1 text-neutral-600'>Fee per gas data returned by ether.js</p>
          </div>
        </div>
        <p className='task-desc font-medium text-neutral-700'>Gas fees change every block, if you leave these values empty the bot will use the recommended gas settings at the time of mint.</p>
        <Typography variant="body2" gutterBottom component="div" mb={1} sx={{color: '#383838'}}>Select one or more wallets for this task</Typography>
        <div className='walletlist overflow-y-auto'>
          <WalletList taskForm={true} getWallets={(selWallet)=>setSelWallets(selWallet)}/>
        </div>
        <Button
          color='primary'
          variant="contained"
          fullWidth
          sx={{ padding: 1, marginTop: 5, marginBottom: 5 }}
          onClick={createMintTask}
        >Create Task</Button>
      </div>
    )
}
