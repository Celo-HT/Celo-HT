const { newKit } = require('@celo/contractkit')
const { CELO_RPC } = require('../config')
const kit = newKit(CELO_RPC)
async function sendcUSD(from, to, amount) {
  const stableToken = await kit.contracts.getStableToken()
  // amount is in the smallest units of cUSD (6 decimals)
  const tx = await stableToken.transfer(to, amount).send({ from })
  return tx
}
module.exports = { kit, sendcUSD }