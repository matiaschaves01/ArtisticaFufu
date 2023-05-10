const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
const userValidator = require('../middlewares/userValidator');
const upload = require('../middlewares/multer');
const authMiddleware = require('../middlewares/authMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware');


router.get("/admin", userController.admin);

router.get("/login",authMiddleware,userController.login);
router.post("/login", userController.loginProcess);
router.post('/logout', userController.logout);

router.get('/profile',guestMiddleware,userController.profile);
// router.put('/profile/edit',userController.editUpdate);
router.get('/user/edit/:id',userController.edit);
router.put('/user/edit/:id',upload.single('image'),userController.editUpdate);

router.get("/register",authMiddleware, userController.register);
router.post("/register",upload.single('image'),userValidator, userController.registerProcess)

module.exports = router