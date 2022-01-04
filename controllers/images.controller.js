try {
    let imagesController = {};

    imagesController.getAllImages = async (req, res) => {
        if(connection){
            await connection.query(
                "SELECT * FROM promoimages WHERE PI_Status=1 ORDER BY PI_Order DESC;",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    module.exports = imagesController;
} catch (error) {
    
}