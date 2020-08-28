const router = require('express').Router()
const {Category, Perk, CreditCard} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const creditCards = await CreditCard.findAll()
    res.json(creditCards)
  } catch (error) {
    next(error)
  }
})

router.get('/:creditCardId', async (req, res, next) => {
  try {
    console.log(req.params)
    const {creditCardId} = req.params
    const creditCard = await CreditCard.findAll({
      where: {
        id: creditCardId
      },
      include: [Perk, Category]
    })
    res.json(creditCard)
  } catch (error) {
    next(error)
  }
})

module.exports = router
