try {
    let modelsController = {};

    modelsController.getModels = async (req, res) => {
        if(connection){
            await connection.query(
                'SELECT * FROM cars_models ORDER BY Brand_ID',
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    modelsController.updateModel = async (req, res) => {
        if(connection){
            await connection.query(
                "UPDATE cars_models SET Aperture_ID='"+req.body.apertureid+"', Ranges='"+req.body.ranges+"', Key_Price='"+req.body.keyprice+"', Control_Price='"+req.body.controlprice+"' WHERE Model_ID="+req.body.modelid+";",
                (err, rows) => { 
                    if(err){
                        
                    } else { 
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    modelsController.getModelsByIDORBrand = async (req, res) => {
        if(connection){
            if(req.params.type == 0){
                await connection.query(
                    "SELECT * FROM cars_models WHERE Model_ID='" + req.params.id + "'",
                    (err, rows) => {
                        if(err){
                            
                        } else {
                            res.status(200).json(rows);
                        }
                    }
                );
            } else if(req.params.type == 1){
                await connection.query(
                    "SELECT * FROM cars_models WHERE Brand_ID='" + req.params.id + "' ORDER BY Name",
                    (err, rows) => {
                        if(err){
                            
                        } else {
                            res.status(200).json(rows);
                        }
                    }
                );
            }
        }
    };

    modelsController.addModel = async (req, res) => {
        if(connection){
            await connection.query(
                "INSERT INTO cars_models (Brand_ID, Aperture_ID, Name, Control_Price, Key_Price, PDF, Photo_Key, Photo_Control, Ranges) VALUES " + 
                "('"+req.body.brandid+"', '"+req.body.apertureid+"', '"+req.body.name+"', '"+req.body.controlprice+"', '"+req.body.keyprice+"', '"+req.body.pdf+"', '"+req.body.photokey+"', '"+req.body.photocontrol+"', '"+req.body.ranges+"');",
                (err, rows) => { 
                    if(err){
                        
                    } else { 
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    module.exports = modelsController;
} catch (error) {
    
}