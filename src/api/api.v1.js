
let express = require("express");
let router = express.Router();

let appController = require('../controllers/appController.js');

// ********************************************
// admin account api
router.get("/testEmail", appController.testEmail);
module.exports = router;
