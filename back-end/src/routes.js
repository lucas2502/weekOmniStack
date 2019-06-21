const express = require('express')
const PostController = require('../src/controllers/PostController')

const routes = new express.Router()

routes.post('/posts', PostController.store)

module.exports = routes