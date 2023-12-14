const queryBd = require("../../../utils/db")

const badToken = ()=> new Response(
    JSON.stringify({error: "Token inválido"}), {status: 400, headers: { 'Content-Type': 'application/json' }})

async function checkToken(token){
    let query = `SELECT usuario.id FROM usuario WHERE usuario.token = '${token}';`
    return queryBd(query)
}

async function getPcs(user){
    let query = `SELECT computadores.id, computadores.nome FROM computadores `+
    `WHERE computadores.dono = '${user}';`
    return queryBd(query)
}

export async function GET(req) {
    var token = req.headers.get('authorization')
    if (!token){
        console.log('faltou token')
        return badToken()
    }

    var user = await checkToken(token)

    if (user.length != 1) {
        console.log(`o token ${token} é inválido`)
        return badToken()
    }

    user = user[0].id

    const resBode = JSON.stringify({pcs: await getPcs(user)})

    return new Response(resBode, {status: 200, headers: { 'Content-Type': 'application/json' }})
}