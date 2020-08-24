const db = require('../db')
const Sequelize = require('sequelize')

const CreditCard = db.define('creditCard', {
  issuer: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  network: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  card: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  useType: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {isIn: [['Personal', 'Business']], notEmpty: true},
    defaultValue: 'personal'
  }
})

module.exports = CreditCard
