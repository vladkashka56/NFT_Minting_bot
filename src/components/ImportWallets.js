import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import UploadIcon from '@mui/icons-material/Upload';
import { Button } from '@mui/material';
import {initWeb3} from '../components/utils';
import uniqid from 'uniqid';

export default function ImportWallets(props) {
  const [walletName, setWalletName] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [walletPK, setWalletPK] = useState('');
  const [balance, setBalance] = useState(0);

  const importWallet = (name, address, pk) => {
    setWalletName(name);
    const oldWallets = JSON.parse(localStorage.getItem('wallets'));
    let web3 = initWeb3();
    web3.eth.getBalance(walletAddress, (err, result)=>{
      try {setBalance(result)}
      catch(err) {console.log(err)}
    });
    const newWallets = [...oldWallets, {id: uniqid(), walletName: name, address: address, balance, key: pk}];

    localStorage.setItem('wallets', JSON.stringify(newWallets))
    props.importWallet();
  }

  useEffect(() => {
    console.log("importWallet");
    const oldWallets = JSON.parse(localStorage.getItem('wallets'));
    if (oldWallets === null) localStorage.setItem('wallets', JSON.stringify([]));
  }, []);

  return (
    <div className="create-wallets">
      <div className='flex justify-between items-center mb-5'>
        <Typography variant="h5" gutterBottom component="div" sx={{color: '#383838'}}>Import Wallets</Typography>
      </div>
      <div className='grid grid-cols-2 gap-8 mb-8'>
        <div>
          <p className='mb-1 font-medium text-neutral-700'>Wallet Name</p>
          <input type="text" className="form-input w-full rounded-md px-4 py-3" onChange={(e) => setWalletName(e.target.value)} />
        </div>
        <div>
          <p className='mb-1 font-medium text-neutral-700'>Wallet Address</p>
          <input type="text" className="form-input w-full rounded-md px-4 py-3" onChange={(e) => setWalletAddress(e.target.value)} />
        </div>
        <div className='col-start-1 col-end-3'>
          <p className='mb-1 font-medium text-neutral-700'>Wallet Private Key</p>
          <input type="text" className="form-input w-full rounded-md px-4 py-3 mb-3" onChange={(e) => setWalletPK(e.target.value)} />
        </div>
      </div>
      <Button color='primary' variant="contained" endIcon={<UploadIcon />} fullWidth sx={{ padding: 2 }} onClick={()=>importWallet(walletName, walletAddress, walletPK)}>Import wallet</Button>
    </div>
  )
}
