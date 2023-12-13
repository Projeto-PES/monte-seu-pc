const mariadb = require('mariadb')
const pool = mariadb.createPool(
    {
        host: "localhost",
        user: 'root',
        password: 'admin',
        port: '3306',
        database: 'monte_seu_pc'
    }
)

async function queryBd(query){
    let conn;
    try {
        conn = await pool.getConnection()
        return await conn.query({sql: query, timeout: 4000})
    }
    catch (e) {
        if (e.code == 'ER_GET_CONNECTION_TIMEOUT') {console.log("REINICIA QUE DEU RUIM")}
        throw e
    }
    finally {
        if (conn) {conn.release()}
    }
}

module.exports = queryBd