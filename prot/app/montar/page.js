'use client'
import Modal from '@mui/joy/Modal'
import ModalOverflow from '@mui/joy/ModalOverflow'
import ModalDialog from '@mui/joy/ModalDialog'

import { useState, useEffect } from 'react';
//import { extendTheme } from '@mui/joy/styles'
const logoIMG = "/LOGO.png"
const memory = [
  {
    id: 1,
    nome: "Fury Beast KF432C16BB/8",
    marca: "Kingston",
    img: "/memoria-ram.jpg",
    props: [
      {nome: "DDR4"},
      {nome: "DIMM"},
    ],
    pot: 3
  },
  {
    id: 2,
    nome: "Basics CB8GS2666",
    marca: "Crucial",
    img: "/memoria-ram.jpg",
    props: [
      {nome: "SO-DIMM"},
      {nome: "DDR4"},
    ],
    pot: 3
  },
  {
    id: 3,
    nome: "Signature Line PSD58G520041",
    marca: "Patriot",
    img: "/memoria-ram.jpg",
    props: [
      {nome: "DIMM"},
      {nome: "DDR5"},
    ],
    pot: 3
  },
];

const cardHeightVh = 22

const memDefault = {
  id: 0,
  nome: "Memória RAM",
  marca: "Escolha!",
  img: "/memoria-ram.jpg",
  props: [
  ],
  pot: 0
}

const procDefault = {
  id: 0,
  nome: "Processador",
  marca: "Escolha!",
  img: "/processador.webp",
  props: [
  ],
  pot: 0
}

const pmDefault = {
  id: 0,
  nome: "Placa mãe",
  marca: "Escolha!",
  img: "/placa-mae.jpg",
  props: [
  ],
  pot: 0
}

const fonteDefault = {
  id: 0,
  nome: "Fonte",
  marca: "Escolha!",
  img: "/fonte.webp",
  props: [
  ],
  pot: 0
}

const HorizontalCard = ({peca, props={}}) => {
  return (
    <div className="flex bg-white rounded-lg shadow-lg" style={{height: `${cardHeightVh}vh`, width: '44vh'}} {...props}>
      <div style={{width: "30%"}}>
        <img
          src={peca.img}
          alt={`${peca.nome} Image`}
          className="object-contain h-full w-full"
        />
      </div>
      <div className="p-4 w-2/3">
        <h2 className="text-2xl font-bold mb-2 text-black">{peca.nome}</h2>
        <p className="text-gray-600">{peca.props.map((prop)=>prop.nome).join(", ")}</p>
        <div className="flex flex-wrap justify-between">
          <p className="text-gray-600">POT: {peca.pot}</p>
          <p className="text-gray-600">MARCA: {peca.marca}</p>
        </div>
      </div>
    </div>
  );
};


async function mockBusca(tipo, tdsPecas) {
  const data = { pot:0, fontepot:0, props:[] };
  const addUnico = (prop)=>{if (!data.props.includes(prop)){data.props.push(prop)}}
  //pule para a linha <linha do fetch> e ignore isso, por favor
  if (tipo != "Processador" && tdsPecas.proc != procDefault) {data.pot += tdsPecas.proc.pot
                            tdsPecas.proc.props.map(addUnico)}
  if (tipo != "Placa-mãe" && tdsPecas.pm != pmDefault) {data.pot += tdsPecas.pm.pot
                            tdsPecas.pm.props.map(addUnico)}
  if (tipo != "Memória" && tdsPecas.mem != memDefault) {data.pot += tdsPecas.mem.pot
                            tdsPecas.mem.props.map(addUnico)}
  if (tipo != "Fonte" && tdsPecas.fonte != fonteDefault) {data.fontepot += tdsPecas.fonte.pot
                            tdsPecas.fonte.props.map(addUnico)
                          }
  
  const res = await fetch(`/api/pecas?tipo=${tipo}`, {method: "POST", body: JSON.stringify(data),
      }).then((response) => response.json())

  console.log(res)
  return res
}

const seletor = (openState, tipo, pecaState, tdsPecas) => {

  const [peças, setPeças] = useState([])
  
  function printaItens(){
    console.log(`tipo: ${tipo} pecas: ${peças}`)
    return true ? "tem nd nn" : peças[0].map((a) =>
    HorizontalCard({peca:a, props:{onClick: ()=>{pecaState[1](a)},
      style:{height:`${cardHeightVh}vh`, width: '66vh', marginLeft: "auto", marginRight: "auto"}}})
  )

  }
  return(
  <div className='flex items-center'>
    {HorizontalCard({peca:pecaState[0], props:{onClick: ()=>{openState[1](true)}, style:{height:`${cardHeightVh}vh`, width: '66vh', marginLeft: "auto", marginRight: "auto"}}})}
    <Modal open={openState[0]}>
      <div className='w-screen h-screen flex items-center'>
        <div style={{height: "90vh"}} className='bg-slate-500 w-1/2 mx-auto flex flex-col justify-center rounded-lg items-center'>
          <div className='w-full h-full bg-slate-500 flex flex-col rounded-lg items-center'>
            <button className='bg-red-400 w-full' onClick={()=>openState[1](false)}>feche ohm</button>
            <div className='w-full space-y-5 overflow-x-hidden overflow-y-auto flex flex-col rounded-lg items-center'>
              {JSON.stringify(mockBusca(tipo, tdsPecas))}
            </div>
            <button className='bg-green-400 w-full' onClick={()=>openState[1](false)}>feche ohm so que verde</button>
          </div>
        </div>
      </div>
    </Modal>
  </div>
  )
}

export default function Build(){
  const selMem = useState(false)
  const selProc = useState(false)
  const selFonte = useState(false)
  const selPm = useState(false)
  const memState = useState(memDefault)
  const pmState = useState(pmDefault)
  const procState = useState(procDefault)
  const fonteState = useState(fonteDefault)
  const pecas = {
    pm: pmState[0],
    mem: memState[0],
    proc: procState[0],
    fonte: fonteState[0],
  }
  return (
    <div className="bg-gray-800 rounded-lg h-screen mx-auto w-2/3">
      <div className="flex flex-col items-center h-full">
        <div className="overflow-hidden mx-auto flex flex-shrink-0">
            <img className="w-auto" src={logoIMG} alt="monte-seu-pc"/>
        </div>
        <div id='thisOne' className="flex flex-col flex-grow w-full justify-around">
          <div className='overflow-y-scroll flex flex-col space-y-5' style={{height:"60vh"}}>
            {seletor(selProc, "Processador", procState, pecas)}
            {seletor(selPm, "Placa-mãe", pmState, pecas)}
            {seletor(selMem, "Memória", memState, pecas)}
            {seletor(selFonte, "Fonte", fonteState, pecas)}

          </div>
        </div>
      </div>
    </div>
  );
};

/*
<button onClick={()=>setOpen(true)}>modal?</button>
<Modal open={open}>
            <div className='w-screen h-screen flex justify-center items-center'>
              <div className='bg-gray-600 w-1/2 h-3/4 rounded-xl flex justify-center items-center'>
                <div className='w-11/12 h-11/12 overflow-scroll'>
                  <p>XABLAU</p>
                  <button className='bg-red-400' onClick={()=>setOpen(false)}>modal nn</button>
                </div>
              </div>
            </div>
          </Modal>
          */