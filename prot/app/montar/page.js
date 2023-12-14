'use client'

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
    ]
  },
  {
    id: 2,
    nome: "Basics CB8GS2666",
    marca: "Crucial",
    img: "/memoria-ram.jpg",
    props: [
      {nome: "SO-DIMM"},
      {nome: "DDR4"},
    ]
  },
  {
    id: 3,
    nome: "Signature Line PSD58G520041",
    marca: "Patriot",
    img: "/memoria-ram.jpg",
    props: [
      {nome: "DIMM"},
      {nome: "DDR5"},
    ]
  },
];

const cardHeightVh = 22

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
      </div>
    </div>
  );
};

const teste = () => alert("teste")

const pecas = (peca) => HorizontalCard({peca, props:{onClick: teste, style:{height:`${cardHeightVh}vh`, width: '66vh', marginLeft: "auto", marginRight: "auto"}}} )
const memorias = memory.map(pecas)

export default function Build(){
  return (
    <div className="bg-gray-800 rounded-lg h-screen mx-auto w-2/3">
      <div className="flex justify-center">
        <div className="flex flex-col justify-between" style={{height: `${4*cardHeightVh}vh`}}>
          <div className="overflow-hidden w-2/3 mx-auto" style={{height: `${cardHeightVh*2/3}vh`}}>
            <img className="w-full h-auto" src={logoIMG} alt="monte-seu-pc"/>
          </div>
          {memorias}
        </div>
      </div>
    </div>
  );
};
