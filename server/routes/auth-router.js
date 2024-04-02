const router = require('express').Router();
const authcontroller = require('../controllers/authController');
const {signupSchema,loginSchema} = require('../validators/auth-validator');
const validate = require('../middlewares/validate-middleware');
const authMiddleware = require('../middlewares/auth-middleware');

router.get('/',authcontroller.home);
router.post('/register',validate(signupSchema),authcontroller.register);
router.post('/login',validate(loginSchema),authcontroller.login);
router.get('/loggeduser',authMiddleware,authcontroller.loggedUserData)



module.exports = router;