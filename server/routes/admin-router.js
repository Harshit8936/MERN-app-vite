const router = require('express').Router();
const userController = require('../controllers/admin/userController');
const contactController = require('../controllers/admin/contactController');
const authMiddleware = require('../middlewares/auth-middleware');

// users admin route
router.get('/users',authMiddleware,userController.allUsers);
router.delete('/user/delete/:id',authMiddleware,userController.deleteUser);
router.patch('/user/update',authMiddleware,userController.updateUser);
router.get('/user/edit/:id',authMiddleware,userController.editUser);



// contact admin route
router.get('/contacts',authMiddleware,contactController.allContacts);
router.delete('/contacts/delete/:id',authMiddleware,contactController.deleteContact);


module.exports = router