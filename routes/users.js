const express = require('express')
const {getUsers, postUsers, getUser, deleteUsers, updateUsers} = require('../controller/usersController.js')
// const {users} = require('../controller/usersController.js')


const router = express.Router()
//  we are working with a mark database, so when ever a post request is made it wont be updated
// let users = []
// all routes in here are starting with /users
router.get('/',getUsers)

router.post('/', postUsers)

router.get('/:id', getUser)

router.delete('/:id', deleteUsers)

router.patch('/:id', updateUsers)

module.exports = router