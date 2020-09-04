const router = require('express').Router()
const {Category, Perk, CreditCard} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const creditCards = await CreditCard.findAll({
      order: [['issuer', 'ASC'], ['card', 'ASC']]
    })
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
      order: [['']]
    })
    res.json(creditCard)
  } catch (error) {
    next(error)
  }
})

module.exports = router
