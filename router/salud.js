const express = require('express');
const router = express.Router();
const controller = require('../controller/mainController')

router.get('/', controller.getRender)
router.post('/', controller.getPost)


module.exports = router;