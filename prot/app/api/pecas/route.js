const queryBd = require("@/utils/db")

const tipoInvalido = ()=> new Response(
    JSON.stringify({error: "Tipo inválido"}), {status: 400, headers: { 'Content-Type': 'application/json' }})

const semProps = ()=> new Response(
    JSON.stringify({error: "Campo 'props' ausente"}), {status: 400, headers: { 'Content-Type': 'application/json' }})

export async function GET(req) {
    const tipo = (new URL(req.url)).searchParams.get("tipo")
    const tipos = ['placamae', 'processador', 'memoria', 'fonte']
    if (tipo in tipos){
        const props = (await req.json()).props
        if (!props) {return semProps()}
        let resBode;
        if (tipo == fonte) {
            resBode = JSON.stringify({pecas: await getFontes(propriedades)})
            return new Response(resBode, {status: 200, headers: { 'Content-Type': 'application/json' }})
        }
        resBode = JSON.stringify({pecas: await getPeca(propriedades)})
    }
    return tipoInvalido()
}