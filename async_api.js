const Influx = require('influx');
var path = require('path');
var fs = require('fs-extra');
const _ = require('underscore')
let cfgLocation = path.join(path.resolve(__dirname));
let dbConfig;
dbConfig = fs.readJSONSync(path.join(cfgLocation,'db_config.json')).dbConfig;

const connection = new Influx.InfluxDB(dbConfig);

function queryData() {
  return new Promise((resolve, reject) => {
    connection.query(`select * from "level" where "site" = 'CSO-002' `)
    .then((result) => {
      console.log('Query complete')
      resolve(result)
    })
  })
}

function readLinesFromQuery (countResult) {
  return new Promise((resolve, reject) => {
    console.log("Reading complete")
    resolve("DONE")
  })
}

async function startExample() {
  try {
    var countResult = await queryData();
    await readLinesFromQuery(countResult);
  } catch(err) {
    throw err
  }
}

startExample()
