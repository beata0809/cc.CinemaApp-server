const express = require('express');
const exampleController = require('../controllers/example');

const router = express.Router();

router.post('/', exampleController.router.create);
router.get('/', exampleController.router.getAll);
router.get('/:id', exampleController.router.getById);

module.exports = router;