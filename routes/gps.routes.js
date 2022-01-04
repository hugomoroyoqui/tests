try {
    const express = require('express');
    const router = express.Router();
    const gpsController = require('../controllers/gps.controller');

    // gps
    router.get('/', gpsController.getAllGPS);
    router.post('/', gpsController.addGPSCar);
    router.put('/', gpsController.updateGPSCar);
    router.put('/status/', gpsController.updateGPSCarStatus);

    // gps users
    router.post('/users/', gpsController.addUserGPS);

    // gps positions
    router.post('/positions/', gpsController.addPosition);
    router.get('/positions/:imei', gpsController.getPositionsByImei);

    module.exports = router;    
} catch(err) {

}