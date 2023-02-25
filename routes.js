let express = require("express");
let router = express.Router();

let homeController = require('./controller/homeController');
let passengerController = require('./controller/passengerController');
let validationController = require('./controller/validationController');

router.get('/', homeController.home);

router.post('/newVoyage',homeController.renderAddPassenger);

router.post('/', homeController.home);

router.post('/confirmPassenger', passengerController.confirmPassenger);

router.post('/final', validationController.final)

module.exports = router;