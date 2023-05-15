const express = require('express');
const router = express.Router()
const productApiController = require('../controllers/productControllerApi')


router.get('/', productApiController.getAll);

router.get('/detail/:id', productApiController.detail);

router.delete('/delete/:id', productApiController.delete);


module.exports = router