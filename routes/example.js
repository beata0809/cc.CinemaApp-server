const express = require('express');
const exampleController = require('../controllers/example');

const router = express.Router();

router.post('/', exampleController.routes.create);
router.get('/', exampleController.routes.getAll);
router.get('/:id', exampleController.routes.getById);

module.exports = router;