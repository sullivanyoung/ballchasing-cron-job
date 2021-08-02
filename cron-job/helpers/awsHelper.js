require('dotenv').config();

var aws = require("aws-sdk");

let awsConfig = {
    "region": process.env.AWS_REGION,
    "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
    "accessKeyId": process.env.AWS_ACCESS_KEY,
    "secretAccessKey": process.env.AWS_SECRET_KEY
};

aws.config.update(awsConfig);

let docClient = new aws.DynamoDB.DocumentClient();

module.exports = {
    docClient
}