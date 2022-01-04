try {
    const express = require('express');
    const router = express.Router();
    const brandsController = require('../controllers/brands.controller');
    
    router.get('/', brandsController.getBrands);
    router.post('/', brandsController.addBrand);
    router.delete('/', brandsController.deleteBrand);
    
    module.exports = router;
} catch (error) {
    
}