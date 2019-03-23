const express = require('express');
const { root, addUser, getAllUsers } = require('./../controllers/user');

const router = express.Router();

router.get('/', root);
router.get('/users', getAllUsers)

router.post('/add-user', addUser);

module.exports = router;