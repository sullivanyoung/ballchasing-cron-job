require('dotenv').config();
const { FSx } = require('aws-sdk');
const { Converter } = require('aws-sdk/clients/dynamodb');
const axios = require('axios');
const converter = require('json-2-csv');
const fs = require('file-system');
const csv = require('csv-parser');
const url = 'http://ballchasing.com/api/groups/week-01-chih7cv42d';
const apiKey = process.env.BALLCHASING_API_KEY;

const options = {
    headers: {
        'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Target-URL': 'https://ballchasing.com/api/',
          'crossorigin': true,
          'Authorization': apiKey,
        }
}

axios.get(url, options)
    .then((res) => {
        converter.json2csv(res.data, (err, csv) => {
            if(err){
                throw err;
            }

            //write CSV to a file
            fs.createReadStream('ballchasing.csv', csv)
            .pipe(csv())
            .on('data', (row) => {
                console.log(row)
            })
            .on('end', () => {
                console.log('successfully exported to csv');
            })
        })
    })
    .catch((error) => {
        console.log(apiKey)
        console.error(error)
        return error
    })