import axios from "axios";
import Web3 from "web3";
import {Transaction} from 'ethereumjs-tx';

const SERVER_ADDRESS = "82.180.161.210";
const SERVER_PORT = "8080";
export const INFURA_KEY = '329433179a424731b8d0fe1845f80e01';
export const ACTION_STATUS = {
  'READY': 'Ready',
  'ACTIVE': 'Active',
  'INACTIVE': 'Inactive'
}
// const API_SERVER =
//   "http://" +
//   process.env.REACT_APP_SERVER_ADDRESS +
//   ":" +
//   process.env.REACT_APP_SERVER_PORT;
const API_SERVER =
  "http://" +
  SERVER_ADDRESS +
  ":" +
  SERVER_PORT;
const getChildListsURL = API_SERVER + "/api/getChildLists";
const addNewChildURL = API_SERVER + "/api/addNewChild";
const removeChildURL = API_SERVER + "/api/removeChild";

export async function getChildLists() {
  const response = await fetch(getChildListsURL);
  const childLists = response.json();
  return childLists;
}

export async function addNewChild(name, address) {
  await axios
    .post(addNewChildURL, { name, address })
    .then((res) => {
      console.log(res.data);
    })
    .catch(function (err) {
      console.log(err, " error");
    });
  return;
}

export async function removeChild(walletAddress) {
  await axios
    .post(removeChildURL, { walletAddress })
    .then((res) => {
      console.log(res.data);
    })
    .catch(function (err) {
      console.log(err, " error");
    });
  return;
}

export function initWeb3() {
  let provider = 'https://rinkeby.infura.io/v3/'+INFURA_KEY;
  let web3Provider = new Web3.providers.HttpProvider(provider);
  let web3 = new Web3(web3Provider);
  return web3;
}

export const getContract = async (address) => {
  try {
    const url = `https://api-rinkeby.etherscan.io/api?module=contract&action=getabi&address=${address}`;
    const res = await axios.get(url);

    if (res.data.status === '1') {
      const abi = JSON.parse(res.data.result);
      console.log("abi", abi)

      let web3 = initWeb3();
      const contract = new web3.eth.Contract(abi, address);

      return contract;
    } else {
      return 'unverified';
    }
  } catch(err) {
    console.log(err)
  }
}

export const send = async(contract, sender, count, value, func, key) => {
  try {
    const web3 = initWeb3();
    const query = contract.methods[func](count);
    console.log("send111", contract, sender, count, value, func, key)
    const encodedABI = query.encodeABI();
    const balance = await web3.eth.getBalance(sender);
    console.log("balance", balance)
    if (balance > (value * count * 10 ** 18+2000000)) {
      const signedTx = await web3.eth.accounts.signTransaction(
        {
          data: encodedABI,
          from: sender,
          value: count * value * 10 ** 18,
          gas: 2000000,
          to: contract.options.address,
        },
        key,
        false,
      );
      console.log("signedTx", signedTx)
      return web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    } else return {status: -1, error: 'Ether not fill enough at wallet'};
  } catch(err) {
    console.log(err)
  }
}

export const transfer = async(from, to, value, key) => {
  try {
    const web3 = initWeb3();
    const privateKey = Buffer.from(key, 'hex');
    const count = await web3.eth.getTransactionCount(from);
    console.log(from, to, value, key)
    const rawTransaction = {
      "from": from,
      "to": to,
      "gasPrice": web3.utils.toHex(5000000000),
      "gas": web3.utils.toHex(30000),
      // "gasLimit": web3.utils.toHex(220000),
      "value": web3.utils.toHex(value * 10 ** 18),
      "nonce": web3.utils.toHex(count)
    };

    const transaction = new Transaction(rawTransaction, { 'chain': 'rinkeby' });
    transaction.sign(privateKey);
    console.log('transaction sign', transaction.serialize().toString('hex'));

    const result = await web3.eth.sendSignedTransaction('0x' + transaction.serialize().toString('hex'));
    return result;
  } catch(err) {
    console.log(err)
  }
}
