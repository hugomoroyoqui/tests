try {
    const express = require('express');
    const router = express.Router();
    const promosController = require('../controllers/promos.controller');
    
    router.get('/', promosController.getLastPromo);
    router.post('/', promosController.addPromo);
    
    module.exports = router;   
} catch (error) {
     
}