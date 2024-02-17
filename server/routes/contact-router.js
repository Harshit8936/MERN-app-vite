const router = require('express').Router();
const contactcontroller = require('../controllers/contactController');


router.post('/contact',contactcontroller.contact);

module.exports = router;
