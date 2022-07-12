const jawsdb = require('mysql')

const conn = jawsdb.createConnection({
    host: 'lcpbq9az4jklobvq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'gvvd429s9vgan43x',
    password: 'xebkg61utprdtgpf',
    database: 'vuk1b9sr60rb8ppr'
})

module.exports = conn;