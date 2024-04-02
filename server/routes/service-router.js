const router = require('express').Router();
const serviceController = require('../controllers/serviceController');

router.post("/addservice",serviceController.addService);
router.get("/services",serviceController.getAllServices);

module.exports = router;