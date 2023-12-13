import { NextResponse } from 'next/server'
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

async function genToken(id){
    let token;
    let query;
    let done = false;
    while (!done){
    try {
        token = randomBytes(16).toString('hex')
        query = `UPDATE usuario SET token = '${token}', sessao = NOW() WHERE id = '${id}';`
        await queryBd(query)
        done = true
    } catch (e) {
        console.log(e)
    }
    }
    return token
}

const LoginInvalido = ()=> NextResponse.json({}, {status: 400})

export async function POST(req) {
    let bode = await req.json()
    if (!bode.email || !bode.senha) {
        return LoginInvalido()
    }
    var ruido = await getRuido(bode.email)
    if (ruido.length != 1) {
        console.log("nn achei ruido para "+bode.email)
        return LoginInvalido()
    }
    ruido = ruido[0].ruido

    var user = await getUser(bode.email, bode.senha, ruido)
    if (user.length != 1){
        console.log(`nn achei usuario para "${bode.email}" e "${bode.senha}"`)
        return LoginInvalido()
    }

    user = user[0].id

    const resBode = JSON.stringify({session: await genToken(user)})

    return new Response(resBode, {status: 200, headers: { 'Content-Type': 'application/json' }})
}