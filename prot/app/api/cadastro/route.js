import { createHash, randomBytes } from "crypto";
const queryBd = require("@/utils/db")

async function getRuido(email){
    let query = `SELECT usuario.ruido FROM usuario WHERE `+
    `usuario.email = '${email}';`
    return queryBd(query)
}

async function getUser(email, senha, ruido){
    var hash = createHash('sha256')
    hash.update(senha+ruido, 'utf-8')
    hash = hash.digest('hex')
    let query = `SELECT usuario.id FROM usuario WHERE usuario.email = '${email}' AND `+
    `usuario.senha = '${hash}';`
    return queryBd(query)
}

async function genUser(nome, email, senha){
    const ruido = randomBytes(16).toString('hex')
    var hash = createHash('sha256')
    hash.update(senha+ruido, 'utf-8')
    hash = hash.digest('hex')
    let query = `INSERT INTO usuario (email, nome, senha, ruido) VALUES `+
    `('${email}', '${nome}', '${hash}', '${ruido}');`
    return queryBd(query)
}

const emailRepetido = ()=> new Response(
    JSON.stringify({error: "já existe uma conta com esse email"}), {status: 409, headers: { 'Content-Type': 'application/json' }})

const campoVazio = ()=> new Response(
    JSON.stringify({error: "Um ou mais campos não foram preenchidos"}), {status: 400, headers: { 'Content-Type': 'application/json' }})

export async function POST(req) {
    let bode = await req.json()
    if (!bode.email || !bode.senha || !bode.nome) {
        return campoVazio()
    }
    const ruido = await getRuido(bode.email) //reaproveitando para checar conta
    if (ruido.length != 0) {
        console.log(`${bode.email} é repetido`)
        return emailRepetido()
    }

    await genUser(bode.nome, bode.email, bode.senha)

    return new Response("{}", {status: 200})
}