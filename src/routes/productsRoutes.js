const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const productController = require('../controllers/productController');
const createMiddleware = require('../middlewares/createValidatorMdw');
const adminMiddleware = require('../middlewares/adminMiddleware');


// Listado de productso
router.get('/',adminMiddleware ,productController.index);
// creacion de producto
router.get('/create',adminMiddleware, productController.create);
router.post('/create', upload.single('image'),createMiddleware, productController.store);
// actualizar producto
router.get('/edit/:id',adminMiddleware, productController.edit);
router.put('/edit/:id', productController.update);
// eliminar producto
router.get('/delete/:id',adminMiddleware, productController.delete);
router.delete('/delete/:id', productController.destroy);
// ver producto
router.get('/:id', productController.show);


module.exports = router;