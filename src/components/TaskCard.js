import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SegmentIcon from '@mui/icons-material/Segment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Link from '@mui/material/Link';
import MintController from './MintController';

export default function TaskCard(props) {
  const {contractAddress, mintPice, selWallets, maxPriorityGasFee, maxGasFee} = props.task;

  return (
    <div className='taskcard my-2'>
      <Card variant="outlined">
        <CardContent>
          {
            props.task === ''
            ? <Typography variant="h6" component="div">Tasks Not Found</Typography>
            : <div className='flex items-center w-full'>
            <div className='wc-30 flex'>
              <div className='wc-60'><Link href={`https://rinkeby.etherscan.io/address/${contractAddress}`} target="_blank">{contractAddress?.slice(0, 12)}...</Link></div>
              <p className='wc-40'>{mintPice} <SegmentIcon fontSize="small" sx={{color: 'white'}}/></p>
            </div>
            <div className='wc-40 flex'>
              <p className='wc-50'>{maxGasFee}/{maxPriorityGasFee}</p>
              <p className='wc-30'>{selWallets?.length} <AccountBalanceWalletIcon fontSize="small" sx={{color: 'white'}}/></p>
              <p className='wc-20'>Ready</p>
            </div>
            <div className='wc-30 flex justify-end min-w-max'>
              <MintController task={props.task} delTask={()=>props.delTask(props.task)} />
            </div>
          </div>
          }
        </CardContent>
      </Card>
    </div>
  )
}