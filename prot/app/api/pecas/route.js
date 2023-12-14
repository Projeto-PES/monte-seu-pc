const queryBd = require("../../../utils/db")

const tipoInvalido = ()=> new Response(
    JSON.stringify({error: "Tipo inválido"}), {status: 400, headers: { 'Content-Type': 'application/json' }})

const semProps = ()=> new Response(
    JSON.stringify({error: "Campo 'props' ausente"}), {status: 400, headers: { 'Content-Type': 'application/json' }})

async function getPeca(props, pot, fontepot, tipo){
    //usando um n muito alto pra nn pesquisar como eh inf no mariadb
    const maxPot = fontepot>0 ? (fontepot*2/3) - pot : 999999999
    let query = `
    SELECT *, (
        SELECT CONCAT_WS(",", pecas_prop.prop)
        FROM pecas_prop
        WHERE pecas_prop.peca = pecas.id
    ) AS props
    FROM pecas WHERE pecas.id NOT IN (
        SELECT PECAS_PROP.peca
        FROM PECAS_PROP
        WHERE PECAS_PROP.prop IN (
            SELECT incompat_prop.prop2
            FROM incompat_prop
            WHERE incompat_prop.prop1 IN (${props.join()})
        )
    ) AND pecas.pot < ${maxPot} AND pecas.tipo = "${tipo}";`
    if (props.length==0){query = `SELECT *, (SELECT CONCAT_WS(",", pecas_prop.prop) FROM pecas_prop WHERE pecas_prop.peca = pecas.id) AS props FROM pecas WHERE pecas.pot < ${maxPot} AND pecas.tipo = "${tipo}";`}
    const res = await queryBd(query)
    function formatar(peca){
        peca.props = peca.props || ""
        peca.props = peca.props.split(',')
        peca.props = peca.props.filter(prop => prop != "")
    }
    res.map(formatar)
    return res
}

async function getFontes(props, pot){
    let query = `
    SELECT *, (
        SELECT CONCAT_WS(",", pecas_prop.prop)
        FROM pecas_prop
        WHERE pecas_prop.peca = pecas.id
    ) AS props
    FROM pecas WHERE pecas.id NOT IN (
        SELECT PECAS_PROP.peca
        FROM PECAS_PROP
        WHERE PECAS_PROP.prop IN (
            SELECT incompat_prop.prop2
            FROM incompat_prop
            WHERE incompat_prop.prop1 IN (${props.join()})
        )
    ) AND pecas.pot > ${pot*1.5} AND pecas.tipo = "Processador";`
    if (props.length==0){query = `SELECT *, (SELECT CONCAT_WS(",", pecas_prop.prop) FROM pecas_prop WHERE pecas_prop.peca = pecas.id) AS props FROM pecas WHERE pecas.pot > ${pot*1.5} AND pecas.tipo = "Processador";`}
    console.log(query)
    const res = await queryBd(query)
    function formatar(peca){
        peca.props = peca.props || ""
        peca.props = peca.props.split(',')
        peca.props = peca.props.filter(prop => prop != "")
    }
    res.map(formatar)
    return res
}

export async function POST(req) {
    const tipo = (new URL(req.url)).searchParams.get("tipo")
    const tipos = ['Placa-mãe', 'Processador', 'Memória', 'Fonte']
    if (tipos.includes(tipo)){
        let bode;
        try{
            bode = await req.json()
        }catch{return semProps()}
        const props = bode.props
        if (!props) {return semProps()}
        console.log(props.join(','))
        let resBode;
        const pot = bode.pot || 0
        if (tipo == 'fonte') {
            resBode = JSON.stringify({pecas: await getFontes(props, pot)})
            return new Response(resBode, {status: 200, headers: { 'Content-Type': 'application/json' }})
        }
        const fontepot = bode.fontepot || 0
        resBode = JSON.stringify({pecas: await getPeca(props, pot, fontepot, tipo)})
        return new Response(resBode, {status: 200, headers: { 'Content-Type': 'application/json' }})
    }
    return tipoInvalido()
}