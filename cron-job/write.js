const { docClient } = require('./helpers/awsHelper');

var id = Math.floor(1000 + Math.random() * 9000);

let save = function () {

    var input = {
        "testID": id.toString(), "created_by": "clientUser", "created_on": new Date().toString(),
        "updated_by": "clientUser", "updated_on": new Date().toString(), "is_deleted": false
    };
    var params = {
        TableName: process.env.AWS_TABLE,
        Item:  input
    };
    docClient.put(params, function (err, data) {

        if (err) {
            console.log("users::save::error - " + JSON.stringify(err, null, 2));                      
        } else {
            console.log("users::save::success" );                      
        }
    });
}

save();