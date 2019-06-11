'use strict'

const authEvents = require('./auth/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Login/Logout handlers!
  $('#sign-up-button').on('click', authEvents.onSignUp)
  $('#sign-in-button').on('click', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#quick-sign-in').on('submit', authEvents.onQuickSignIn)
})
