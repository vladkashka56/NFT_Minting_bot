import React, {useEffect, useState} from 'react';
import WalletCard from './WalletCard';
import {initWeb3} from '../components/utils';

export default function WalletList(props) {
  const { taskForm } = props;
  const [wallets, setWallets] = useState([]);
  const [selectWallets, setSelectWallets] = useState([]);

  const setSelWallets = (checked, wallet) => {
    let temp = [];
    if (checked) {
      temp = [...selectWallets, wallet];
      setSelectWallets(temp);
    } else {
      temp = selectWallets.filter(item => item.address !== wallet.address);
      setSelectWallets(temp);
    }
    props.getWallets(temp);
  }

  const delWallet = wallet => {
    const restWallet = wallets.filter(item => item.address !== wallet.address);
    setWallets(restWallet);
    localStorage.setItem('wallets', JSON.stringify(restWallet));
  }

  useEffect(() => {
    console.log('walletList')
    async function fetchWallets() {
      const oldWallets = JSON.parse(localStorage.getItem('wallets'));
      setWallets(oldWallets);
      if (oldWallets === null || oldWallets === [] ) {
        localStorage.setItem('wallets', JSON.stringify([]));
        return [];
      } else {
        let web3 = initWeb3();
        let temp = [];
        for (let i=0; i<oldWallets.length; i++) {
          let balance = await web3.eth.getBalance(oldWallets[i].address);
          let wall = {};
          balance = web3.utils.fromWei(balance, 'ether');
          wall = {walletName: oldWallets[i].walletName, address: oldWallets[i].address, balance, key: oldWallets[i].key}
          temp = [...temp, wall];
        }
        localStorage.setItem('wallets', JSON.stringify(temp));
        return temp;
      }
    }

    fetchWallets().then((result, err)=>{
      setWallets(result);
    });
  }, []);

  return (
    <div className='custom-table overflow-y-auto'>
      {
        wallets !== null
          ? wallets.map((wallet, id) =>
            <WalletCard key={id} wallet={wallet} taskForm={taskForm} setSelectWallet={(checked, wallet)=>setSelWallets(checked, wallet)} delWallet={wallet=>delWallet(wallet)} />)
          : <WalletCard key='0' wallet='' />
      }
    </div>
  )
}
