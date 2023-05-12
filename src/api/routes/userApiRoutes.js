const express = require('express');
const router = express.Router()
const userApiController = require('../controllers/userControllerApi')


router.get('/', userApiController.getAll)
router.get('/:id', userApiController.getByPk)

module.exports = router