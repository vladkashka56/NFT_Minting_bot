import Web3 from 'web3'
import abi from './abi'
import * as Web3Utils from 'web3-utils';
import getContractsAddress from './contractsAddress';

const provider = () => {
    // 1. Try getting newest provider
    const { ethereum } = window
    if (ethereum) return ethereum

    // 2. Try getting legacy provider
    const { web3 } = window
    if (web3 && web3.currentProvider) return web3.currentProvider
}

let contractInstance
const tokenAbi = [
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
    },
]
export async function getContractInstance(address) {
    if (provider()) {
        const web3 = new Web3(provider())
        contractInstance = web3.eth.net.getId().then(id => {
            const tokenAddress = "0x1753C1a29Ff90ac6C52F46C23C6FDA94d34a70Eb";
            console.log(address)
            const contractInstance = new web3.eth.Contract(abi, address)

            const tokenContract = new web3.eth.Contract(
                tokenAbi,
                tokenAddress
            );
            return {
                async getTicketPrice() {
                    return await contractInstance.methods.getLatestPrice().call()
                },
                async getPlayerCount() {
                    return await contractInstance.methods.player_count().call()
                },
                async getCurrentLotteryId() {
                    return await contractInstance.methods.currentLotteryId().call()
                },
                async getLotteryInfo(_lotteryId) {
                    return await contractInstance.methods.viewLottery(_lotteryId).call()
                },
                async getCurrentTicketId() {
                    return await contractInstance.methods.currentTicketId().call()
                },
                async viewUserInfoForLotteryId(address, lotteryId) {
                    return await contractInstance.methods.viewUserInfoForLotteryId(address, lotteryId, 0, 1000).call()
                },
                async viewRewardsForTicketId(lotteryId, ticketId) {
                    return await contractInstance.methods.viewRewardsForTicketId(lotteryId, ticketId).call()
                },
                async buyTickets(sender, tickets) {
                    const price = await this.getTicketPrice();
                    const balanceOfToken = await tokenContract.methods.balanceOf(sender).call();
                    console.log(price);
                    const currentId = await this.getCurrentLotteryId();
                    console.log(currentId);
                    try {
                        return contractInstance.methods.buyTickets(currentId, tickets).send({
                            'from': sender,
                            'value': price * tickets.length * (balanceOfToken > 0 ? 1 : 2)
                        })
                    } catch (e) {
                        console.log(e)
                    }
                },
                async claimReward(sender, lotteryId, ticketId) {
                    try {
                        return contractInstance.methods.claimTickets(lotteryId, ticketId).send({
                            'from': sender
                        })
                    } catch (e) {
                        console.log(e)
                    }
                },
                async startLottery(sender, endTime) {
                    try {
                        return contractInstance.methods.startLottery(endTime).send({
                            'from': sender
                        })
                    } catch (e) {
                        console.log(e)
                    }
                },
                async closeLottery(sender, lotteryId) {
                    try {
                        return contractInstance.methods.closeLottery(lotteryId).send({
                            'from': sender
                        })
                    } catch (e) {
                        console.log(e)
                    }
                },
                async drawFinalNumberAndMakeLotteryClaimable(sender, lotteryId, isManual, winningNumber) {
                    try {
                        return contractInstance.methods.drawFinalNumberAndMakeLotteryClaimable(lotteryId, true, isManual, winningNumber).send({
                            'from': sender
                        })
                    } catch (e) {
                        console.log(e)
                    }
                },
                async setOperatorAndTreasuryAndInjectorAddresses(sender, operatorAddress, walletArray) {
                    try {
                        const treasury = walletArray[0];
                        walletArray.shift();
                        return contractInstance.methods.setOperatorAndTreasuryAndInjectorAddresses(operatorAddress, treasury, operatorAddress, walletArray).send({
                            'from': sender
                        })
                    } catch (e) {
                        console.log(e)
                    }
                }
            }
        })
        return contractInstance;
    }
}