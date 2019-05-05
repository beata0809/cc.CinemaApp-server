const express = require('express');
const ticketController = require('../controllers/ticket');

const router = express.Router();

router.post('/', ticketController.routes.create);
router.get('/', ticketController.routes.getAll);
router.get('/:id', ticketController.routes.getById);
router.delete('/:id', ticketController.routes.deleteById);
router.put('/:id', ticketController.routes.updateModel);
router.delete('/', ticketController.routes.deleteModel);

module.exports = router;