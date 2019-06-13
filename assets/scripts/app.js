'use strict'

const authEvents = require('./auth/events.js')
const restEvents = require('./restaurants/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $(document).ready(() => restEvents.onLoadRestaurants(event))
  // Login/Logout handlers!
  $('#sign-up-button').on('click', authEvents.onSignUp)
  $('#back').on('click', authEvents.onBack)
  $('#sign-in-button').on('click', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#quick-sign-in').on('submit', authEvents.onQuickSignIn)

  // Restaurant handlers
  $('#getRestaurants').on('click', restEvents.onIndexRestaurants)
  $('.content').on('click', '.delete-restaurant', restEvents.onDeleteRestaurant)
  $('#createRestaurant').on('submit', restEvents.onCreateRestaurant)
  $('.content').on('click', '.update-restaurant', restEvents.onUpdateClick)
  $('.content').on('submit', '.return', restEvents.onUpdateRestaurant)
})

// restEvents.onUpdateRestaurant
