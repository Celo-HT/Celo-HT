require('dotenv').config()
module.exports = {
  CELO_RPC: process.env.CELO_RPC || 'https://forno.celo.org',
  CUSD_CONTRACT: process.env.CUSD_CONTRACT || '0x765DE816845861e75A25fCA122bb6898B8B1282a',
  PORT: Number(process.env.PORT || 4000)
}