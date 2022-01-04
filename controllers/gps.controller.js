try {
    let gpsController = {};

    // gps_cars --------------------------------------------------------------------------------------

    gpsController.getAllGPS = async (req, res) => {  
        if(connection){
            await connection.query(
                "SELECT GC_Imei,GC_Active,GC_Carname,GC_Color,GC_Created,GC_Brand,GC_Model,GC_Password,GC_Expiration, " + 
                "(SELECT GROUP_CONCAT(GCC_Name) FROM gps_cars_clients AS clients WHERE cars.GC_Imei = clients.GC_Imei) " + 
                "AS GCC_Name FROM gps_cars AS cars ORDER BY cars.GC_Expiration;",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };
    
    gpsController.addGPSCar = async (req, res) => {
        if(connection){
            await connection.query(
                "INSERT INTO gps_cars (GC_Imei, GC_Carname, GC_Color, GC_Brand, GC_Model, GC_Password, GC_Expiration) values ('"+req.body.imei+"', '"+req.body.carname+"', '"+req.body.color+"', '"+req.body.brand+"', '"+req.body.model+"', '"+req.body.password+"', '"+req.body.expiration+"');",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    gpsController.updateGPSCar = async (req, res) => {
        if(connection){
            await connection.query(
                "UPDATE gps_cars SET GC_Carname='"+req.body.carname+"', GC_Password='"+req.body.password+"', GC_Expiration='"+req.body.expiration+"' WHERE GC_Imei="+req.body.imei+";",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    gpsController.updateGPSCarStatus = async (req, res) => {
        if(connection){
            await connection.query(
                "UPDATE gps_cars SET GC_Active="+req.body.status+" WHERE GC_Imei="+req.body.imei+";",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    // GPS cars users ---------------------------------------------------------------------------

    gpsController.addUserGPS= async (req, res) => {
        if(connection){
            await connection.query(
                "INSERT INTO gps_cars_clients (GC_Imei, GCC_Email, GCC_Name) values ('"+req.body.imei+"', '"+req.body.email+"', '"+req.body.name+"');",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    gpsController.addPosition = async (req, res) => {
        if(connection){
            await connection.query(
                "INSERT INTO gps_cars_positions (GC_Imei, GCP_Ignition, GCP_Lat, GCP_Lng, GCP_Orientation, GCP_Speed, GCP_Unixtime) values ('"+req.body.imei+"', "+req.body.ignition+", "+req.body.lat+", "+req.body.lng+", "+req.body.orientation+", "+req.body.speed+", "+req.body.unixtime+");",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    gpsController.getPositionsByImei = async (req, res) => {  
        if(connection){
            await connection.query(
                "SELECT * FROM gps_cars_positions WHERE GC_Imei='"+req.params.imei+"';",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    module.exports = gpsController;
} catch (error) {
    
}