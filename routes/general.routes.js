try {
    const express = require('express');
    const router = express.Router();
    const generalController = require('../controllers/general.controller');
    
    router.get('/', generalController.getGeneralInfo);
    
    
    module.exports = router;   
} catch (error) {
    
}