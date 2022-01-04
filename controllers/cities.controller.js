try {
    let citiesController = {};

    citiesController.getCities = async (req, res) => {  
        if(connection){
            await connection.query(
                "SELECT * FROM cities ORDER BY Cit_Name;",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    citiesController.getCitiesByCountry = async (req, res) => {  
        if(connection){
            await connection.query(
                "SELECT * FROM cities WHERE Count_ID='"+req.params.id+"' ORDER BY Cit_Name;",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    citiesController.getCityByID = async (req, res) => {  
        if(connection){
            await connection.query(
                "SELECT * FROM cities WHERE Cit_ID='"+req.params.id+"';",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };
    
    citiesController.addCity = async (req, res) => {
        if(connection){
            await connection.query(
                "INSERT INTO cities (Cit_ID, Count_ID, Cit_Name, Cit_Lat, Cit_Lng, Cit_Percent, " + 
                "Cit_Positiveornegative, Cit_Range) values ('"+req.body.Cit_ID+"', '"+req.body.Count_ID+"', " + 
                "'"+req.body.Cit_Name+"', "+req.body.Cit_Lat+", "+req.body.Cit_Lng+", "+req.body.Cit_Percent+", " +
                ""+req.body.Cit_Positiveornegative+", "+req.body.Cit_Range+");",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    citiesController.updateStatus = async (req, res) => {  
        if(connection){
            await connection.query(
                "UPDATE cities SET Cit_Active="+req.body.Cit_Active+" WHERE Cit_Folio="+req.body.Cit_Folio+";",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    citiesController.applyDiscount = async (req, res) => {  
        if(connection){
            await connection.query(
                "UPDATE cities SET Cit_Apply="+req.body.Cit_Apply+" WHERE Cit_Folio="+req.body.Cit_Folio+";",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    citiesController.updateCity = async (req, res) => {  
        if(connection){
            await connection.query(
                "UPDATE cities SET Cit_Percent="+req.body.Cit_Percent+", Cit_Positiveornegative="+req.body.Cit_Positiveornegative+" WHERE Cit_Folio="+req.body.Cit_Folio+";",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    module.exports = citiesController;
} catch (error) {
    
}