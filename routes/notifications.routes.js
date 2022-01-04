try {
    const express = require('express');
    const router = express.Router();
    const NotificationsController = require('../controllers/notifications.controller');
    
    router.get('/:user/:limit/:n', NotificationsController.getAllNotifications);
    router.post('/', NotificationsController.addNotification);
    
    module.exports = router;   
} catch (error) {
     
}