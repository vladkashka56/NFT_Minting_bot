import React from 'react';
import Typography from '@mui/material/Typography';
import ClipLoader from "react-spinners/ClipLoader";
import BuleLogoImg from "../assets/image/blue-logo.png";

export default function Home() {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "primary",
  };

  return (
    <div className='home'>
      <div className='flex flex-col justify-center items-center'>
        <ClipLoader color="#1976d2" loading={true} cssOverride={override} size={42} />
        <Typography variant="h3" gutterBottom component="div" sx={{color: '#383838'}}>Verifying ownership of</Typography>
        <div className='flex mb-4 items-center'>
          <img src={BuleLogoImg} alt='Opensea Logo' className="w-[80px] h-[80px] mr-4" />
          <p className='text-5xl text-sky-600	'>Contract Minter NFT</p>
        </div>
        <Typography variant="body1" gutterBottom component="div" sx={{color: '#101010'}}>You will recieve access once verified</Typography>
      </div>
    </div>
  )
}
