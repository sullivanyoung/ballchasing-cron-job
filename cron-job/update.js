const { docClient } = require('./helpers/awsHelper');

let modify = function () {
    var params ={
        TableName: process.env.AWS_TABLE,
        Key: {"testID": "12345"},
        UpdateExpression: "set updated_by = :byUser, is_deleted = :boolValue",
        ExpressionAttributeValues:{
            ":byUser": "updateUser",
            ":boolValue": true
        },
        ReturnValues: "UPDATED_NEW"
    };
    docClient.update(params, function(err, data){
        if(err){
            console.log("test-table::selectOneByKey::error - " + JSON.stringify(err, null, 2));
        }
        else{
            console.log("users::selectOneByKey::success - " + JSON.stringify(data, null, 2));
        }
    });
}

modify();