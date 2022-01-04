try {
    let notificationsController = {};

    notificationsController.getAllNotifications = async (req, res) => {
        if(connection){
            await connection.query(
                "SELECT * FROM general_notifications WHERE GN_User_Email='"+req.params.user+"' OR GN_User_Email='undefined' ORDER BY GN_ID DESC LIMIT "+req.params.limit+"",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    notificationsController.addNotification = async (req, res) => {
        if(connection){
            await connection.query(
                "INSERT INTO general_notifications (GN_Title, GN_Description, GN_User_Email, GN_Type, GN_City) values ('"+req.body.title+"', '"+req.body.description+"', '"+req.body.user+"', "+req.body.type+", '"+req.body.city+"')",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    module.exports = notificationsController;
} catch (error) {
    
}