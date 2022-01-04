try {
    const express = require('express');
    const router = express.Router();
    const paymentinfoController = require('../controllers/paymentinfo.controller');
    
    router.get('/:n', paymentinfoController.getInfo);
    
    module.exports = router;   
} catch (error) {
    
}