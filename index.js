try {
    const express = require('express');
    const app = express();
    const morgan = require('morgan');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const connection = require('./database/databasemykey');

    const port = process.env.PORT || 3000;
    
    //Settings
    app.set('port', port);
    
    //Middlewares
    app.use(morgan('dev')); 
    app.use(bodyParser.json());
    /*app.use((req, res, next) => {
        const allowedOrigins = ['http://127.0.0.1', 'http://localhost', 'https://www.admin.mykey.com.mx/', 'https://www.admin.mykey.com.mx'];
        const origin = req.headers.origin;
        if (allowedOrigins.includes(origin)) {
                res.setHeader('Access-Control-Allow-Origin', origin);
        }
        res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.header('Access-Control-Allow-Credentials', true);
        return next();
    });*/
    app.use(cors({ origin: '*'}));
    //app.use(cors());     
     
    
    //Routes
    app.use('/api/brands', require('./routes/brands.route'));
    app.use('/api/models', require('./routes/models.routes'));
    app.use('/api/apertures', require('./routes/apertures.routes'));
    app.use('/api/general', require('./routes/general.routes'));
    app.use('/api/techs', require('./routes/techs.routes'));
    app.use('/api/promos', require('./routes/promos.routes')); 
    app.use('/api/productorders', require('./routes/productorders.routes'));
    app.use('/api/workorders', require('./routes/workorders.routes'));
    app.use('/api/notifications', require('./routes/notifications.routes'));
    app.use('/api/rewards', require('./routes/rewards.routes'));
    app.use('/api/images', require('./routes/images.routes'));
    app.use('/api/gps', require('./routes/gps.routes'));
    app.use('/api/pointregister', require('./routes/pointregister.routes'));
    app.use('/api/checklist', require('./routes/checklist.routes'));
    app.use('/api/countries', require('./routes/countries.routes'));
    app.use('/api/cities', require('./routes/cities.routes'));
    app.use('/api/paymentinfo', require('./routes/paymentinfo.routes'));
    //Server
    app.listen(port, () => {
        console.log('server on port: ' + port); 
    }); 

} catch (error) {
    
}