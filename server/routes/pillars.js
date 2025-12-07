const express = require('express')
const router = express.Router()
const prisma = require('../prismaClient')
router.get('/education', async (req, res) => {
  res.json({
    title: 'Education',
    items: [
      'What Celo is',
      'How cUSD works',
      'How Valora works',
      'Basic security and best practices'
    ]
  })
})
router.post('/reforestation', async (req, res) => {
  const { location, trees, userAddress } = req.body
  if (!location || !trees) return res.status(400).json({ error: 'location and trees required' })
  const impact = Number(trees) * 0.21
  try {
    let user = null
    if (userAddress) {
      user = await prisma.user.findUnique({ where: { address: userAddress } })
      if (!user) {
        user = await prisma.user.create({ data: { address: userAddress } })
      }
    }
    const entry = await prisma.reforestation.create({
      data: {
        location,
        trees: Number(trees),
        impact,
        reportedBy: user ? user.id : null
      }
    })
    res.json(entry)
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'server error' })
  }
})
router.get('/reforestation', async (req, res) => {
  const all = await prisma.reforestation.findMany({ include: { reporter: { select: { id: true, address: true, name: true } } } })
  res.json(all)
})
router.post('/agent', async (req, res) => {
  const { userAddress, name } = req.body
  if (!userAddress) return res.status(400).json({ error: 'userAddress required' })
  try {
    let user = await prisma.user.findUnique({ where: { address: userAddress } })
    if (!user) user = await prisma.user.create({ data: { address: userAddress, name } })
    res.json({ message: 'Agent registered', user })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'server error' })
  }
})
module.exports = router