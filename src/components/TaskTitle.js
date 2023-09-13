import React from 'react';

export default function TaskTitle() {
  return (
    <div className='taskcard my-2'>
      <div className='flex items-center w-full'>
        <div className='ml-2 wc-30 flex text-white'>
          <p className='wc-60 text-stone-600 font-bold'>ContactAddress</p>
          <p className='wc-40 text-stone-600 font-bold'>Mint Price</p>
        </div>
        <div className='wc-40 flex text-white'>
          <p className='wc-50 text-stone-600 font-bold'>Gas Price(Fee/Prio)</p>
          <p className='wc-30 text-stone-600 font-bold'>Wallet</p>
          <p className='wc-20 text-stone-600 font-bold'>Status</p>
        </div>
        <div className='wc-30 flex justify-end min-w-max'>
        </div>
      </div>
    </div>
  )
}