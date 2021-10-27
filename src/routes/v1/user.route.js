const express = require('express');
const router = express.Router();
const { userController } = require('../../controller');
const { userValidator } = require('../../validations');
const validate = require('../../middlewares/validator');

router.get('/', userController.getAllUsers);
router.get('/:userId', userController.getUserById); //userId validation
router.post('/create', validate(userValidator.createUser), userController.create); // userobject validation
router.patch('/update', validate(userValidator.updateUser), userController.updateUser);

module.exports = router;