try {
    const express = require('express');
    const router = express.Router();
    const productOrdersController = require('../controllers/productorders.controller');

    router.get('/', productOrdersController.getNotifications);
    router.post('/', productOrdersController.addNotification);  
    router.put('/', productOrdersController.updateNotificationStatus);  

    module.exports = router;    
} catch(err) {

}