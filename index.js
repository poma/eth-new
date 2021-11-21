#!/usr/bin/env node
const { Wallet } = require('ethers')
const wallet = Wallet.createRandom()
console.log(`Address: ${wallet.address}`)
console.log(`Private key: ${wallet.privateKey}`)
