'use strict'

const store = require('../../store.js')

const isOwner = (ownerId) => {
  return store.user.id === ownerId
}

module.exports = isOwner
