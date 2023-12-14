'use client'
import "./styles.css";
import Select, { components } from "react-select";
//import logoIMG from "../../assets/logoIMG.webp";
const logoIMG = "/logoIMG.webp"

const customStyles = {
  option: (state) => ({
    backgroundColor: state.isFocused ? "white" : "white",
    alignItems: "center", // Centralizar a imagem verticalmente
  }),
  singleValue: (provided, state) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
  }),
};

const option = (props) => {
  <div {...props} style={{height:"10vh"}}>

    <label className=" text-4xl text-yellow-400">MACARRRRRAO</label>
  </div>
}

const testeFormat = ({label, value})=> (<option label={label}/>)

const memory = [
  {
    name: "FURY - MEMÓRIA RAM 8GB",
    description: "ESSA MEMÓRIA POSSUI 8GB RAM",
    image: "/memoria-ram.jpg",
  },
  {
    name: "XPG - MEMÓRIA RAM 16GB",
    description: "ESSA MEMÓRIA POSSUI 16GB RAM",
    image: "/memoria-ram.jpg",
  },
  {
    name: "ASGARD - MEMÓRIA RAM 32GB",
    description: "ESSA MEMÓRIA POSSUI 32GB RAM",
    image: "/memoria-ram.jpg",
  },
];

const select = (pecas) => {return (
  <Select className="select-control" styles={customStyles} options={pecas}
        formatOptionLabel={option}
      />
)}

const selects = [memory, motherboard, powersupply, processor].map(select)

const teste = [{label: 'teste', value: 'funfa?'},{label: 'teste2', value: 'funfa2?'}, {label: 'teste3', value: 'funfa3?'}]

export default function Build(){
  return (
    <div className="container">
      <div className="container-selects mx-auto w-2/3 overflow-auto">
        <img className="" style={{height: "10vh"}} src={logoIMG} />
        {select(memory)}
        <Select className=" w-2/3 h-fit text-2xl" options={teste} components={{SingleValue:option, Option: option}}/>
        <button>Salvar</button>
      </div>
    </div>
  );
};
