export default [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_aeternaAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_randomGeneratorAddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "AdminTokenRecovery",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "lotteryId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "firstTicketIdNextLottery",
				"type": "uint256"
			}
		],
		"name": "LotteryClose",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "lotteryId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "injectedAmount",
				"type": "uint256"
			}
		],
		"name": "LotteryInjection",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "lotteryId",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "uint256[6]",
						"name": "numbers",
						"type": "uint256[6]"
					}
				],
				"indexed": false,
				"internalType": "struct IAeternaLottery.TicketNumber",
				"name": "finalNumber",
				"type": "tuple"
			}
		],
		"name": "LotteryNumberDrawn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "lotteryId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "endTime",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "firstTicketId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "injectedAmount",
				"type": "uint256"
			}
		],
		"name": "LotteryOpen",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "treasury",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "injector",
				"type": "address"
			}
		],
		"name": "NewOperatorAndTreasuryAndInjectorAddresses",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "randomGenerator",
				"type": "address"
			}
		],
		"name": "NewRandomGenerator",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "claimer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "lotteryId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "numberTickets",
				"type": "uint256"
			}
		],
		"name": "TicketsClaim",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "lotteryId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "numberTickets",
				"type": "uint256"
			}
		],
		"name": "TicketsPurchase",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "MAX_LENGTH_LOTTERY",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MIN_LENGTH_LOTTERY",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "aeternaToken",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_lotteryId",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "uint256[6]",
						"name": "numbers",
						"type": "uint256[6]"
					}
				],
				"internalType": "struct IAeternaLottery.TicketNumber[]",
				"name": "_ticketNumbers",
				"type": "tuple[]"
			}
		],
		"name": "buyTickets",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_randomGeneratorAddress",
				"type": "address"
			}
		],
		"name": "changeRandomGenerator",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_lotteryId",
				"type": "uint256"
			},
			{
				"internalType": "uint256[]",
				"name": "_ticketIds",
				"type": "uint256[]"
			}
		],
		"name": "claimTickets",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_lotteryId",
				"type": "uint256"
			}
		],
		"name": "closeLottery",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "currentLotteryId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "currentTicketId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_lotteryId",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_autoInjection",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "_manual",
				"type": "bool"
			},
			{
				"components": [
					{
						"internalType": "uint256[6]",
						"name": "numbers",
						"type": "uint256[6]"
					}
				],
				"internalType": "struct IAeternaLottery.TicketNumber",
				"name": "_ticket",
				"type": "tuple"
			}
		],
		"name": "drawFinalNumberAndMakeLotteryClaimable",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getLatestPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_lotteryId",
				"type": "uint256"
			}
		],
		"name": "injectFunds",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "injectorAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "operatorAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pendingInjectionNextLottery",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "player_count",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "randomGenerator",
		"outputs": [
			{
				"internalType": "contract IRandomNumberGenerator",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokenAmount",
				"type": "uint256"
			}
		],
		"name": "recoverWrongTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_operatorAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_treasuryAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_injectorAddress",
				"type": "address"
			},
			{
				"internalType": "address[]",
				"name": "_wallets",
				"type": "address[]"
			}
		],
		"name": "setOperatorAndTreasuryAndInjectorAddresses",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_endTime",
				"type": "uint256"
			}
		],
		"name": "startLottery",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "treasuryAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "viewCurrentLotteryId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_lotteryId",
				"type": "uint256"
			}
		],
		"name": "viewLottery",
		"outputs": [
			{
				"components": [
					{
						"internalType": "enum AeternaLottery.Status",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "startTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "endTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256[6]",
						"name": "rewardsBreakdown",
						"type": "uint256[6]"
					},
					{
						"internalType": "uint256[6]",
						"name": "rewardPerBracket",
						"type": "uint256[6]"
					},
					{
						"internalType": "uint256[6]",
						"name": "countWinnersPerBracket",
						"type": "uint256[6]"
					},
					{
						"internalType": "uint256",
						"name": "firstTicketId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "firstTicketIdNextLottery",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amountCollected",
						"type": "uint256"
					},
					{
						"components": [
							{
								"internalType": "uint256[6]",
								"name": "numbers",
								"type": "uint256[6]"
							}
						],
						"internalType": "struct IAeternaLottery.TicketNumber",
						"name": "finalNumber",
						"type": "tuple"
					}
				],
				"internalType": "struct AeternaLottery.Lottery",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_ticketIds",
				"type": "uint256[]"
			}
		],
		"name": "viewNumbersAndStatusesForTicketIds",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256[6]",
						"name": "numbers",
						"type": "uint256[6]"
					}
				],
				"internalType": "struct IAeternaLottery.TicketNumber[]",
				"name": "",
				"type": "tuple[]"
			},
			{
				"internalType": "bool[]",
				"name": "",
				"type": "bool[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_lotteryId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_ticketId",
				"type": "uint256"
			}
		],
		"name": "viewRewardsForTicketId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_lotteryId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_cursor",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_size",
				"type": "uint256"
			}
		],
		"name": "viewUserInfoForLotteryId",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"components": [
					{
						"internalType": "uint256[6]",
						"name": "numbers",
						"type": "uint256[6]"
					}
				],
				"internalType": "struct IAeternaLottery.TicketNumber[]",
				"name": "",
				"type": "tuple[]"
			},
			{
				"internalType": "bool[]",
				"name": "",
				"type": "bool[]"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "wallet1",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "wallet10",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "wallet11",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "wallet2",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "wallet3",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "wallet4",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "wallet5",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "wallet6",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "wallet7",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "wallet8",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "wallet9",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]