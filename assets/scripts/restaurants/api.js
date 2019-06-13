'use strict'

const config = require('../config.js')
const store = require('../store.js')

const loadRestaurants = () => {
  return $.ajax({
    url: config.apiUrl + '/restaurants',
    method: 'GET'
  })
}

const indexRestaurant = () => {
  return $.ajax({
    url: config.apiUrl + '/restaurants',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const deleteRestaurant = function (restaurantId) {
  return $.ajax({
    url: config.apiUrl + '/restaurants/' + restaurantId,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const createRestaurant = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/restaurants',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const updateRestaurant = (formData, restaurantId) => {
  return $.ajax({
    url: config.apiUrl + '/restaurants/' + restaurantId,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

module.exports = {
  loadRestaurants,
  indexRestaurant,
  deleteRestaurant,
  createRestaurant,
  updateRestaurant
}
