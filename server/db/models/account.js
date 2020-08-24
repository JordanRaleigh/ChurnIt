const db = require('../db')
const Sequelize = require('sequelize')
const timezone = 'America/Chicago'
const moment = require('moment').tz.setDefault(timezone)

const Account = db.define('account', {
  renewalFee: {
    type: Sequelize.INTEGER
  },
  renewalDate: {
    type: Sequelize.DATEONLY,
    get: function() {
      return moment.utc(this.getDataValue('regDate')).format('YYYY-MM-DD')
    }
  }
})

module.exports = Account
