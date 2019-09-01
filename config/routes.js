const express = require('express')
const router = express.Router()

const categoriesController = require('../app/controllers/categoriesController')
const cuisinesController = require('../app/controllers/cuisinesController')
const foodItemController = require('../app/controllers/foodItemController')
const restaurantController = require('../app/controllers/restaurantController')
const orderController = require('../app/controllers/orderController')
const usersController = require('../app/controllers/usersController')

const { authenticateUser } = require('../app/middlewares/authentication')

router.get('/categories', categoriesController.list)
router.get('/categories/:id', categoriesController.show)
router.post('/categories', categoriesController.create)
router.put('/categories/:id', categoriesController.update)
router.delete('/categories/:id', categoriesController.destroy)

router.get('/cuisines', cuisinesController.list)
router.get('/cuisines/:id', cuisinesController.show)
router.post('/cuisines', cuisinesController.create)
router.put('/cuisines/:id', cuisinesController.update)
router.delete('/cuisines/:id', cuisinesController.destroy)

router.get('/foodItems', foodItemController.list)
router.get('/foodItems/:id', foodItemController.show)
router.post('/foodItems', foodItemController.create)
router.put('/foodItems/:id', foodItemController.update)
router.delete('/foodItems/:id', foodItemController.destroy)

router.get('/restaurants', restaurantController.list)
router.get('/restaurants/:id', restaurantController.show)
router.post('/restaurants', restaurantController.create)
router.put('/restaurants/:id', restaurantController.update)
router.delete('/restaurants/:id', restaurantController.destroy)

router.get('/orders', authenticateUser, orderController.list)
router.get('/orders/:id', authenticateUser, orderController.show)
router.post('/orders', authenticateUser, orderController.create)
router.put('/orders/:id', authenticateUser, orderController.update)
router.delete('/orders/:id', authenticateUser, orderController.destroy)

router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account', authenticateUser, usersController.account)
router.get('/users/logout', authenticateUser, usersController.logout)


module.exports = router