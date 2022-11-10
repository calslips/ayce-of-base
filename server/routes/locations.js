const router = require('express').Router();
const locationsController = require('../controllers/locations');

router.post('/', locationsController.createLocation);

module.exports = router;