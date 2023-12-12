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
        return await conn.query(query)
    }
    catch (e) {
        throw e
    }
    finally {
        if (conn) {conn.release()}
    }
}

module.exports = queryBd