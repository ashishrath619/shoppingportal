const express= require("express");
const mainController = require("../controller/htmlController");
const router= express.Router();
const app=express();

router.route("/").get(mainController.index);

router.route("/index").get(mainController.index);

router.route("/products").get(mainController.products);

router.route("/about").get(mainController.about);

router.route("/contact").get(mainController.contact);

router.route("/account").get(mainController.account);


module.exports = router;
