const db = require('../db')
const Sequelize = require('sequelize')

const Perk = db.define('perk', {
  creditCardId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  categoryId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  points: {
    type: Sequelize.FLOAT
  },
  benefits: {
    type: Sequelize.JSONB
  }
})

module.exports = Perk
