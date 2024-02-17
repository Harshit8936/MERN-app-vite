const router = require('express').Router();
const authcontroller = require('../controllers/authController');
const signupSchema = require('../validators/auth-validator');
const validate = require('../middlewares/validate-middleware');

router.get('/',authcontroller.home);
router.post('/register',validate(signupSchema),authcontroller.register);
router.post('/login',authcontroller.login);



module.exports = router;