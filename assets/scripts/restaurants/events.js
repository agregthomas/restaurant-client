'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onLoadRestaurants = () => {
  api.loadRestaurants()
    .then(ui.indexRestaurantsSuccess)
    .catch(ui.indexRestaurantsFail)
}

const onIndexRestaurants = () => {
  api.indexRestaurant()
    .then(ui.indexRestaurantsSuccess)
    .catch(ui.indexRestaurantsFail)
}

const onDeleteRestaurant = (event) => {
  event.preventDefault()

  // Because handlebars passes the ID from the DB as a custom data attribute "data-id" to the HTML element, we can retrieve it using thing .data('custom-name') jQuery method.
  const restaurant = $(event.target)
  const restaurantId = restaurant.data('id')

  // We write an anonymous function here so we can pass the event from the parent function (onDeleteRestaurant).
  api.deleteRestaurant(restaurantId)
    .then(response => {
      onIndexRestaurants(event)
    })
    .then(ui.deleteRestaurantFail)
}

const onCreateRestaurant = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.createRestaurant(formData)
    .then(responseData => {
      ui.createRestaurantSuccess(responseData)
      onIndexRestaurants(event)
    })
    .catch(ui.createRestaurantFail)
}

const onUpdateClick = (event) => {
  event.preventDefault()

  const restaurant = $(event.target.parentNode).siblings('.return')
  const restaurantId = restaurant.data('id')

  $(`form.return[data-id='${restaurantId}'] input`).prop('disabled', false)
  $(`form.return[data-id='${restaurantId}'] input[type=submit]`).prop('hidden', false)
}

const onUpdateRestaurant = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  const restaurant = $(event.target.closest('.return'))
  const restaurantId = restaurant.data('id')

  api.updateRestaurant(formData, restaurantId)
    .then(responseData => {
      $(`form.return[data-id='${restaurantId}'] input`).prop('disabled', true)
      $(`form.return[data-id='${restaurantId}'] input[type=submit]`).prop('hidden', true)
      ui.createRestaurantSuccess(responseData)
    })
    .catch(ui.updateRestaurantFail)
}

module.exports = {
  onLoadRestaurants,
  onIndexRestaurants,
  onDeleteRestaurant,
  onCreateRestaurant,
  onUpdateRestaurant,
  onUpdateClick
}
