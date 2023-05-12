const express = require('express');
const router = express.Router()
const productApiController = require('../controllers/productControllerApi')


router.get('/', productApiController.getAll);

router.get('/detail/:id', productApiController.detail);



module.exports = router