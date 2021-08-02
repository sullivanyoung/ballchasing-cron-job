const { docClient } = require('./helpers/awsHelper');

let selectOneByKey = function() {
    var params = {
        TableName: process.env.AWS_TABLE,
        Key: {"testID": "12345"}
    };
    docClient.get(params, function (err, data){
        if(err){
            console.log("test-table::selectOneByKey::error - " + JSON.stringify(err, null, 2));
        }
        else{
            console.log("users::selectOneByKey::success - " + JSON.stringify(data, null, 2));
        }
    })
}

selectOneByKey();