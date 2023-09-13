import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import StopIcon from '@mui/icons-material/Stop';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import AdjustIcon from '@mui/icons-material/Adjust';
import { toast } from 'react-toastify';
import { getContract, send } from './utils';

export default function MintController(props) {
  const { contractAddress, mintFunction, selWallets, quantity, mintPice } = props.task;
  const [isMinting, setIsMinting] = useState(false);
  const [isStop, setIsStop] = useState(false);

  const onMint = async () => {
    const contract = await getContract(contractAddress);
    if (contract !== 'unverified') {
      for (let i = 0; i < selWallets.length; i++) {
        if (isStop === true) break;
        else {
          setIsMinting(true);
          let result = await send(contract, selWallets[i].address, quantity, mintPice, mintFunction, selWallets[i].key);
          console.log(result)
          if (result.status === true) {
            toast.success(selWallets[i].walletName + ': Minting successfully', {
              theme: "colored",
              pauseOnHover: false,
              position: toast.POSITION.TOP_RIGHT
            });
          } else if (result.status === -1) {
            toast.error(selWallets[i].walletName + ': ' + result.error, {
              theme: "colored",
              pauseOnHover: false,
              position: toast.POSITION.TOP_RIGHT
            });
          } else if (result.status === false) {
            toast.error(selWallets[i].walletName + ': Minting failed', {
              theme: "colored",
              pauseOnHover: false,
              position: toast.POSITION.TOP_RIGHT
            });
          }
        }
      }
      setIsMinting(false);
    } else {
      toast.error("Contract source code not verified", {
        theme: "colored",
        pauseOnHover: false,
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const onStop = () => {
    setIsStop(true);
    setIsMinting(false);
  }
  return (
    <>
      <IconButton color="success" aria-label="Play" component="label" onClick={onMint}>
        {
          isMinting ? <AdjustIcon fontSize="small" color='success' /> : <PlayArrowIcon fontSize="small" />
        }
      </IconButton>
      <IconButton aria-label="Stop" component="label" onClick={onStop} disabled={!isMinting}>
        <StopIcon fontSize="small" />
      </IconButton>
      <IconButton color="primary" aria-label="Edit" component="label" >
        <DriveFileRenameOutlineIcon fontSize="small" />
      </IconButton>
      <IconButton color="primary" aria-label="Copy" component="label">
        <FileCopyIcon fontSize="small" />
      </IconButton>
      <IconButton color="error" aria-label="Delete" component="label" onClick={props.delTask}>
        <DeleteIcon fontSize="small" color='error' />
      </IconButton>
    </>
  )
}