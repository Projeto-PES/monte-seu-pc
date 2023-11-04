import Image from "next/image"
import React from 'react'

const dados = [
  {
    nome: "processador intel",
    img: "/procintel.jpg",
    desc: "processador da intel que nn gosta da amd"
  },
  {
    nome: "processador amd",
    img: "/procamd.jpg",
    desc: "processador da amd que nn gosta da intel"
  },
]

const HorizontalCard = ({nome, img, desc}) => {
  return (
    <div className="flex bg-white rounded-lg shadow-lg" style={{height: '15vh'}}>
      {/* Image on the left */}
      <div className="w-1/3">
        <img
          src={img}
          alt="${nome} Image"
          className="object-contain h-full w-full"
        />
      </div>
      
      {/* Title and Description on the right */}
      <div className="w-2/3 p-4">
        <h2 className="text-2xl font-bold mb-2 text-black">{nome}</h2>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
};


const itens = dados.map(({nome, img, desc}) => <li><HorizontalCard nome={nome} img={img} desc={desc}/></li>)

export default function Home() {
  return (
    <div className="mx-auto w-3/4 bg-gray-200 p-6 rounded-lg h-screen overflow-auto">
      <div>
        <h1 className="text-black text-4xl">Lista de componentes</h1>
      </div>
      <ul className="space-y-4 w-full">{itens}</ul>
    </div>
  )
}
