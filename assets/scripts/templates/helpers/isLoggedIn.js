'use strict'

const store = require('../../store.js')

const isLoggedIn = () => {
  return store.user !== undefined
}

module.exports = isLoggedIn
