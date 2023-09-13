import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {initWeb3} from '../components/utils';

export default function CreateWallets(props) {
  const [walletName, setWalletName] = useState('Wallet');
  const [walletCount, setWalletCount] = useState(1);
  const [balance, setBalance] = useState(0);

  const createWallet = () => {
    let web3 = initWeb3();
    const oldWallets = JSON.parse(localStorage.getItem('wallets'));
    let newWallet = web3.eth.accounts.wallet.create(walletCount, web3.utils.randomHex(32));
    let temp = [];
    for (let i=0; i<walletCount; i++) {
      web3.eth.getBalance(newWallet[i].address, (err, result)=>{
        try {setBalance(result)}
        catch(err) {console.log(err)}
      });
      temp = [...temp, {walletName, address: newWallet[i].address, balance, key: newWallet[i].privateKey}];
    }

    const newWallets = [...oldWallets, ...temp];
    localStorage.setItem('wallets', JSON.stringify(newWallets))
    props.createWallet();
  }

  useEffect(() => {
    console.log("createWallet");
    const oldWallets = JSON.parse(localStorage.getItem('wallets'));
    if (oldWallets === null) localStorage.setItem('wallets', JSON.stringify([]));
  }, []);

  return (
    <div className="create-wallets">
      <div className='flex justify-between items-center'>
        <Typography variant="h5" gutterBottom component="div" sx={{color: '#383838'}}>Create Wallets</Typography>
      </div>
      <Typography variant="body2" gutterBottom component="div" mb={5} sx={{color: '#383838'}}>Our bots are hosted on IPFS and run directly in YOUR browser, these details never leave your device.</Typography>
      <div className='mb-8'>
        <p className='mb-1 font-medium text-neutral-700'>Nickname</p>
        <input type="text" className="form-input w-full rounded-md px-4 py-3 mb-5" onChange={(e) => setWalletName(e.target.value)} />
        <p className='mb-1 font-medium text-neutral-700'>Total Wallets</p>
        <input type="number" className="form-input w-full rounded-md px-4 py-3 mb-3" onChange={(e) => setWalletCount(e.target.value)} defaultValue={1} />
        <p className='text-neutral-700'>If more than one wallet is created the 'nickname' field will be used as a prefix for the new wallets.</p>
      </div>
      <Button color='primary' variant="contained" fullWidth sx={{ padding: 2 }} onClick={createWallet}>Generate</Button>
    </div>
  )
}
