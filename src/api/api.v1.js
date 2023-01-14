
let express = require("express");
let router = express.Router();

let appController = require('../controllers/appController.js');

// ********************************************
// admin account api
router.get("/testEmail", appController.testEmail);
router.get("/count", appController.getCount);
module.exports = router;
