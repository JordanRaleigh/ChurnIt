const Account = require('./account')
const Category = require('./category')
const Perk = require('./perk')
const CreditCard = require('./creditCard')
const User = require('./user')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

User.hasMany(Account)
Account.belongsTo(User)
Account.belongsTo(CreditCard)
CreditCard.hasMany(Account)
CreditCard.hasMany(Perk)
Perk.belongsTo(CreditCard)
Perk.belongsTo(Category)
Category.hasOne(Perk)

module.exports = {
  User,
  Account,
  Category,
  Perk,
  CreditCard
}
