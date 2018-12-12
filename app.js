const web3 = require('web3');
const express = require('express');
const Tx = require('ethereumjs-tx');

const app = express();
const myABI = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "isOwner",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "to",
                "type": "address"
            },
            {
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "pay",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "BalanceUpdate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    }
];
//Infura HttpProvider Endpoint
web3js = new web3(new web3.providers.HttpProvider("https://ropsten.infura.io/v3/5d5737a7401f48438218c5e6ce3a1474"));


 //app.get('/sendtx',function(req,res) {

     var myAddress = '0x6e9B930326DaF218db40a283E20fD03fF9558543';
     var privateKey = Buffer.from('B7FCF61C4BC94B058A4728783306F587A7AAF9861B9FD051F9C6EBD8571CD7D2', 'hex')
     //var toAddress = '0xb69196cd88ea487c8e3b7afcaa45bc8fb9d41fe5';

     //contract abi is the array that you can get from the ethereum wallet or etherscan
     var contractABI = myABI;
     var contractAddress = "0xb69196cd88ea487c8e3b7afcaa45bc8fb9d41fe5";
     //creating contract object
     var contract = new web3js.eth.contract(contractABI);
     var cont = contract.at(contractAddress);
     // console.log("contract: ", cont);
     var instructorEvent = cont.BalanceUpdate({fromBlock: 0, toBlock: 'latest'})
     console.log(instructorEvent)
     // instructorEvent.watch((err, res)=> {
     //     console.log("r", res)
     // });


 //});

 //app.listen(7000, () => console.log('Example app listening on port 3000!'))