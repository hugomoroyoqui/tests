try {
    let workOrdersController = {};

    workOrdersController.getNotifications = async (req, res) => {
        if(connection){
            await connection.query(
                'SELECT * FROM work_orders_notification WHERE WON_Status=0',
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    workOrdersController.addNotification = async (req, res) => {
        if(connection){
            await connection.query(
                "INSERT INTO work_orders_notification (WON_Status) VALUES("+req.body.WON_Status+");",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };

    workOrdersController.updateNotificationStatus = async (req, res) => {
        if(connection){
            await connection.query(
                "UPDATE work_orders_notification SET WON_Status=" + req.body.WON_Status + " WHERE WON_Status=0",
                (err, rows) => {
                    if(err){
                        
                    } else {
                        res.status(200).json(rows);
                    }
                }
            );
        }
    };


    module.exports = workOrdersController;
} catch (error) {
    
}