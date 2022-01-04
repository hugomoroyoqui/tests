try {
    const express = require('express');
    const router = express.Router();
    const workOrdersController = require('../controllers/workorders.controller');

    router.get('/', workOrdersController.getNotifications);
    router.post('/', workOrdersController.addNotification);  
    router.put('/', workOrdersController.updateNotificationStatus);  

    module.exports = router;    
} catch(err) {

}