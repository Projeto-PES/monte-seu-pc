import Link from 'next/link'
import React from 'react'


const pags = [
  {
    nome: "Fazer login",
    desc: "(não existiria tendo uma sessão implementada, você seria redirecionado direto à tela de login se não estivesse logado)",
    dest: "/login"
  },
  {
    nome: "Montar pc",
    desc: "Monte seu pc evitando todas as incompatiblidades que conseguimos prever!",
    dest: "/"
  },
  {
    nome: "Gerenciar peças",
    desc: "(Não elaborado por não pertencer ao protótipo e por não ter sido feita uma sessão, com sessão isso aqui só apareceria pra adm)",
    dest: "/"
  },
  {
    nome: "Deslogar",
    desc: "(Não elaborado por não ter sido feita uma sessão)",
    dest: "/"
  },
].sort((a, b) => a.nome > b.nome ? 1 : -1)

const HorizontalCard = ({nome, desc}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg" style={{height: '22vh', width: '44vh'}}>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2 text-black">{nome}</h2>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
};


const itens = pags.map(({nome, desc, dest}) => <li><Link href={dest}><HorizontalCard nome={nome} desc={desc}/></Link></li>)

export default function Home() {
  return (
    <div className="mx-auto w-3/4 bg-gray-200 p-6 rounded-lg h-screen overflow-auto">
      <div>
        <h1 className="text-black text-4xl">Monte-seu-pc</h1>
      </div>
      <div className='flex justify-between flex-wrap'>
      {itens}
      </div>
    </div>
  )
}