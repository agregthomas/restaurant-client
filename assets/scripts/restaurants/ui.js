'use strict'

const indexRestaurants = require('../templates/index-restaurants.handlebars')

const onSuccess = () => $('#createRestaurant').trigger('reset')

// General use function to handle HTML for fail and success.
const resultCheck = (criteria, userHTML) => {
  $('#results').empty()
  $('#results').text(userHTML)
  $('#results').removeClass()
  $('#results').addClass(criteria)
}

const indexRestaurantsSuccess = (data) => {
  const index = indexRestaurants({ restaurants: data.restaurants })
  $('.content').html(index)
  $('form.return input').prop('disabled', true)
  $('form.return input[type=submit]').prop('hidden', true)

  const userHTML = `Choo got it mane`
  resultCheck('success', userHTML)
}

const indexRestaurantsFail = () => {
  const userHTML = `Failed to retrieve Restaurant index.`
  resultCheck('failure', userHTML)
}

const deleteRestaurantSuccess = () => {
  const userHTML = `Succesfully deleted Restaurant.`
  resultCheck('success', userHTML)
}

const deleteRestaurantFail = () => {
  const userHTML = `Failed to delete Restaurant.`
  resultCheck('failure', userHTML)
}

const createRestaurantSuccess = (responseData) => {
  const userHTML = `New restaurant created with ID = ${responseData.restaurant.id} and named ${responseData.restaurant.name}`

  resultCheck('success', userHTML)
  onSuccess()
}

const createRestaurantFail = () => {
  const userHTML = `Failed to create Restaurant.`
  resultCheck('failure', userHTML)
}

const updateRestaurantSuccess = (responseData) => {
  const userHTML = `Restaurant successfully updated.`
  resultCheck('success', userHTML)
}

const updateRestaurantFail = () => {
  const userHTML = `Failed to update Restaurant.`
  resultCheck('failure', userHTML)
}

module.exports = {
  resultCheck,
  indexRestaurantsSuccess,
  indexRestaurantsFail,
  deleteRestaurantSuccess,
  deleteRestaurantFail,
  createRestaurantSuccess,
  createRestaurantFail,
  updateRestaurantSuccess,
  updateRestaurantFail
}
