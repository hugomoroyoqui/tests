try {
    let generalController = {};

    generalController.getGeneralInfo = async (req, res) => {
        if(connection){
            await connection.query(
                'SELECT * FROM general_info',
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    module.exports = generalController;
} catch (error) {
    
}