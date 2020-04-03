#!/usr/bin/env node
const Web3 = require('web3')
const web3 = new Web3()
const acc = web3.eth.accounts.create()
console.log(`Address: ${acc.address}`)
console.log(`Private key: ${acc.privateKey}`)