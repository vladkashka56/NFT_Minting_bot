import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import { FaEthereum } from 'react-icons/fa';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import { pink } from '@mui/material/colors';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function WalletCard(props) {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const { wallet, taskForm } = props;
  const [copied, setCopied] = useState(false);

  return (
    <div className='walletcard my-2'>
      <Card variant="outlined">
        <CardContent>
          <div className='flex justify-between items-center'>
            {
              wallet === ''
                ? <Typography variant="h6" component="div" sx={{ color: '#383838' }}>Wallet Not Found</Typography>
                : <>
                  <div className='w-full'>
                    <div className='flex'>
                      <Typography variant="h6" gutterBottom component="div" sx={{ color: '#383838' }}>{wallet.walletName}</Typography>
                      <CopyToClipboard text={wallet.key} onCopy={() => {
                        setCopied(true);
                        setTimeout(() => {
                          setCopied(false);
                        }, 1000);
                      }}><span className='text-base leading-7 text-white ml-4'>Copy private key to clipboard</span></CopyToClipboard>
                      {copied? <span className='text-green-600 leading-7 ml-4'>Copied.</span> : null}
                    </div>
                    <div className='flex'>
                      <Link href={`https://rinkeby.etherscan.io/address/${wallet.address}`} underline="hover" target="_blank" mr={1}>address: {wallet.address}</Link>
                      <FaEthereum /><Typography variant="subtitle1" component="div" ml={1} sx={{ color: '#383838' }}>{wallet.balance}</Typography>
                    </div>
                  </div>
                  <div>
                    {
                      taskForm
                        ? <Checkbox {...label} size="large" sx={{
                            color: pink[600],
                            '&.Mui-checked': {
                            color: pink[600],
                            },
                          }} onChange={(e)=>props.setSelectWallet(e.target.checked, wallet)} />
                        : <IconButton color="error" aria-label="Delete" component="label" onClick={()=>props.delWallet(wallet)}>
                            <DeleteIcon color='error' />
                          </IconButton>
                      }
                  </div>
                </>
            }
          </div>
        </CardContent>
      </Card>
    </div>
  )
}