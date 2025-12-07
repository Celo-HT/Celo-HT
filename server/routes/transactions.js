const express = require('express')
const router = express.Router()
const { sendcUSD } = require('../services/celoService')
router.post('/send', async (req, res) => {
  const { from, to, amount } = req.body
  if (!from || !to || !amount) return res.status(400).json({ error: 'from,to,amount required' })
  try {
    const receipt = await sendcUSD(from, to, amount)
    res.json({ status: 'sent', receipt })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'send failed' })
  }
})
module.exports = router