const express = require('express');
const paymentsController = require('../controllers/paymentsController');

const router = express.Router();

router.post('/payments', paymentsController.createPayment);

module.exports = router;