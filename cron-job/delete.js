const { docClient } = require('./helpers/awsHelper');

let remove = function () {

    var params = {
        TableName: process.env.AWS_TABLE,
        Key: {"testID": "6767"}
    };
    docClient.delete(params, function (err, data) {

        if (err) {
            console.log("users::delete::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("users::delete::success");
        }
    });
}

remove();