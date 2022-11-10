const router = require('express').Router();
const locationsController = require('../controllers/locations');

router.post('/', locationsController.createLocation);
router.get('/', locationsController.getAllLocations);

module.exports = router;