import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import WalletList from '../components/WalletList';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { toast } from 'react-toastify';
import { transfer } from './utils';
import '../App.css';

export default function TransferEther(props) {
  const [selWallets, setSelWallets] = useState([]);
  const [fromAddress, setFromAddress] = useState('');
  const [amount, setAmount] = useState(0);
  const [fromPrivateKey, setFromPrivateKey] = useState('');
  const [isSending, setIsSending] = useState(false);

  const send = async (from, to, amount, fromPrivateKey) => {
    for (let i=0; i<to.length; i++) {
      setIsSending(true);
      const result = await transfer(from, to[i].address, amount, fromPrivateKey);
      if (result.status === true) {
        toast.success(to[i].walletName + ': Sending '+amount+' ETH successfully', {
          theme: "colored",
          pauseOnHover: false,
          position: toast.POSITION.TOP_RIGHT
        });
      } else if (result.status === -1) {
        toast.error(to[i].walletName + ': ' + result.error, {
          theme: "colored",
          pauseOnHover: false,
          position: toast.POSITION.TOP_RIGHT
        });
      } else if (result.status === false) {
        toast.error(to[i].walletName + ': Sending failed', {
          theme: "colored",
          pauseOnHover: false,
          position: toast.POSITION.TOP_RIGHT
        });
      }
    }
    setIsSending(false);
  }

  return (
    <div className='transfer'>
      <div className='flex justify-between items-center'>
        <Typography variant="h3" gutterBottom component="div" sx={{color: '#383838'}}>Transfer ETH</Typography>
      </div>
      <div className='grid grid-cols-2 gap-8'>
          <div>
            <p className='font-bold	mb-1 text-gray-700'>From</p>
            <input type="text" className="form-input w-full rounded-md px-4 py-3" onChange={e => setFromAddress(e.target.value)} />
          </div>
          <div>
            <p className='font-bold	mb-1 text-gray-700'>Amount</p>
            <input type="number" className="form-input w-full rounded-md px-4 py-3" defaultValue={0} onChange={e => setAmount(e.target.value)} />
          </div>
          <div className='col-start-1 col-end-3'>
            <p className='font-bold	mb-1 text-gray-700'>ETH's wallet Private Key</p>
            <input type="text" className="form-input w-full rounded-md px-4 py-3 mb-3" onChange={e => setFromPrivateKey(e.target.value)} />
          </div>
      </div>
      <WalletList taskForm={true} getWallets={(selWallet)=>setSelWallets(selWallet)}/>
      <LoadingButton
        variant="contained"
        endIcon={<SendIcon />}
        loading={isSending}
        loadingPosition="end"
        onClick={() => send(fromAddress, selWallets, amount, fromPrivateKey)}
        fullWidth
        sx={{ '&.MuiLoadingButton-loading': { color: '#ffffff88', backgroundColor: '#ffffff22', },
        padding: 1, marginTop: 3, marginBottom: 3 }}>
          Send Request ({amount}ETH)
      </LoadingButton>
    </div>
  );
};
