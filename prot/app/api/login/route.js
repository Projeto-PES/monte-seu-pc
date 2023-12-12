import { NextResponse } from 'next/server'

const queryBd = require("@/utils/db")

async function getRuido(email){
    let query = "SELECT usuario.ruido FROM usuario "+
    "WHERE usuario.email = '<email>';".replace("<email>", ()=> email)
    return queryBd(query)
}

const LoginInvalido = ()=> NextResponse.json({}, {status: 400})

export async function POST(req) {
    var bode = await req.json()
    if (!bode.email || !bode.senha) {
        return LoginInvalido()
    }
    let ruido = await getRuido(bode.email)
    if (ruido.length != 1) {
        console.log("nn achei ruido para "+bode.email)
        return LoginInvalido()
    }
    
    console.log(bode)
    return new Response("ok", {
        status: 200
    })
}