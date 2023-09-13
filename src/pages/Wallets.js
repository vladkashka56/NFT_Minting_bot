import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import UploadIcon from '@mui/icons-material/Upload';
import WalletList from '../components/WalletList';
import CreateWallets from './CreateWallets';
import ImportWallets from '../components/ImportWallets';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Wallets() {
  const [createWallet, setCreateWallet] = useState(false);
  const [importWallet, setImportWallet] = useState(false);

  return (
    <div className="wallets">
      <div className='flex justify-between items-center'>
        <Typography variant="h3" gutterBottom component="div" sx={{color: '#383838'}}>Wallets</Typography>
        <Stack direction="row" spacing={2}>
          <Button href="/transfer" variant='contained' sx={{ marginRight: '2' }}>Transfer Ether</Button>
          <Fab size="small" aria-label="add" onClick={()=>setImportWallet(!importWallet)}>
          {importWallet ? <CloseIcon /> : <UploadIcon />}
          </Fab>
          <Fab size="small" aria-label="add" onClick={()=>setCreateWallet(!createWallet)}>
          {createWallet ? <CloseIcon /> : <AddIcon />}
          </Fab>
        </Stack>
      </div>
      {
        createWallet
        ? <CreateWallets createWallet={()=>setCreateWallet(false)} />
        : importWallet
        ? <ImportWallets importWallet={()=>setImportWallet(false)} />
        : <WalletList taskForm={false} />
      }
    </div>
  )
}
