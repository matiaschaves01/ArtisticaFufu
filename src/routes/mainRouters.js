let express = require("express");
const mainController = require("../controllers/mainControllers");
const userValidator = require('../middlewares/userValidator');

let app = express()

const router = express.Router();

router.get("/", mainController.home);
// usuario
// router.get("/login", mainController.login);
// router.get("/register", mainController.register);
// router.post("/register",userValidator, mainController.registerProcess)


router.get("/carritoDeCompras", mainController.carritoDeCompras);
router.get("/fibrofacil", mainController.fibrofacil);
router.get("/userList", mainController.userList);

module.exports = router