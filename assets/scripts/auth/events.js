'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const restaurantEvents = require('../restaurants/events.js')

const onSignUp = (event) => {
  event.preventDefault()

  $('.confirm').removeAttr('hidden')

  const form = event.target.parentNode
  const formData = getFormFields(form)
  console.log(formData)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFail)
}

const onSignIn = (event) => {
  event.preventDefault()

  const form = event.target.parentNode.parentNode
  const formData = getFormFields(form)
  console.log(form)
  console.log(formData)

  api.signIn(formData)
    .then((responseData) => {
      ui.onSignInSuccess(responseData)
      restaurantEvents.onIndexRestaurants()
    })
    .catch(ui.onSignInFail)
}

const onChangePassword = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFail)
}

const onSignOut = (event) => {
  event.preventDefault()

  api.signOut()
    .then((responseData) => {
      restaurantEvents.onLoadRestaurants(event)
      ui.onSignOutSuccess()
      console.log('o harro')
    })
    .catch(ui.onSignoutFail)
}

const onQuickSignIn = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.quickSignIn(formData)
    .then((responseData) => {
      ui.onSignInSuccess(responseData)
      restaurantEvents.onIndexRestaurants()
    })
    .catch(ui.onSignInFail)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onQuickSignIn
}
