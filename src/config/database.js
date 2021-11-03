const oracledb = require('oracledb');
const util = require("../utils/util");

/*const host     = process.env.DB_HOST;
const database = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD*/
const host = '15.15.0.59:1521';
const database = 'students';
const username = 'students';
const password = 'students';


const executeQuery = async (query, params) => {
    let connection;
    try {
        //oracledb.initOracleClient({libDir: 'D:\\TAAJ\\instantclient_21_3'});

        connection = await oracledb.getConnection({
            username: username,
            password: password,
            connectString: host + '/' + database
        });

        let result = await connection.execute(query);


        return util.parseDatabaseObject(result)

    }catch(err){
        console.log(`Error from database: ${err}`)
        return null;
    }finally{
        //connection.close();

    }
}

module.exports = {
    executeQuery
}