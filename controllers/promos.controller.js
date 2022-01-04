try {
    let promoController = {};

    promoController.getLastPromo = async (req, res) => {  
        if(connection){
            await connection.query(
                "SELECT * FROM promos ORDER BY Promo_ID DESC LIMIT 1;",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    promoController.addPromo = async (req, res) => {
        if(connection){
            await connection.query(
                "INSERT INTO promos (Promo_Code, Promo_Finish_Date) values ("+req.body.code+", '"+req.body.finish+"')",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    module.exports = promoController;
} catch (error) {
    
}