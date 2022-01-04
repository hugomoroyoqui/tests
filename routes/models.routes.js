try {
    const express = require('express');
    const router = express.Router();
    const modelsController = require('../controllers/models.controller');
    
    router.get('/', modelsController.getModels);
    router.get('/:id/:type', modelsController.getModelsByIDORBrand);
    router.post('/', modelsController.addModel);
    router.put('/', modelsController.updateModel); 
    
    module.exports = router;   
} catch (error) {
    
}