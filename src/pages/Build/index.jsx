import "./styles.css";
import ReactSelect from "react-select";
import logoIMG from "../../assets/logoIMG.webp";

export const Build = () => {
  const memory = [
    {
      name: "FURY - MEMÓRIA RAM 8GB",
      description: "ESSA MEMÓRIA POSSUI 8GB RAM",
      image: "memoria-ram.jpg",
    },
    {
      name: "XPG - MEMÓRIA RAM 16GB",
      description: "ESSA MEMÓRIA POSSUI 16GB RAM",
      image: "memoria-ram.jpg",
    },
    {
      name: "ASGARD - MEMÓRIA RAM 32GB",
      description: "ESSA MEMÓRIA POSSUI 32GB RAM",
      image: "memoria-ram.jpg",
    },
  ];

  const motherboard = [
    {
      name: "ASROCK B450M",
      description: "Steel Legend, AMD AM4, mATX, DDR4",
      image: "placa-mae.jpg",
    },
    {
      name: "GIGABYTE B450",
      description: "GAMING, AM4 2XDDR4(MÁX 64GB),4 SATA,1 M.2",
      image: "placa-mae.jpg",
    },
    {
      name: "GIGABYTE B550",
      description: "AORUS Elite, Chipset B550, AMD AM4, mATX, DDR4",
      image: "placa-mae.jpg",
    },
  ];

  const powersupply = [
    {
      name: "ATX 500W",
      description: "Bivolt Crusader Fortrek",
      image: "fonte.webp",
    },
    {
      name: "GIGABYTE 650W",
      description: "P650B 80 Plus Bronze PFC Ativo, GP-P650B",
      image: "fonte.webp",
    },
    {
      name: "ONE POWER 600W",
      description: "70% Eficiência - MP600W3-I, Preto, ATX , 220V/110V",
      image: "fonte.webp",
    },
  ];

  const processor = [
    {
      name: "AMD RYZEN 5 5500",
      description: "‎Socket AM4, ‎65 watts, 3,6 GHz",
      image: "processador.webp",
    },
    {
      name: "CORE I9-10900KF",
      description:
        "3.4GHz (TURBO 4.6GHz) 32MB CACHE AM4 100-100000926WOF, Cerâmica cinza",
      image: "processador.webp",
    },
    {
      name: "AMD RYZEN 7 5700G",
      description: "3.7GHz (5.3GHz Max Turbo), Cache 20MB, LGA 1200",
      image: "processador.webp",
    },
  ];

  const customStyles = {
    option: (state) => ({
      backgroundColor: state.isFocused ? "white" : "white",
      alignItems: "center", // Centralizar a imagem verticalmente
      width: 550,
      display: "flex",
    }),
    singleValue: (provided, state) => ({
      //...provided,
      //display: "flex",
      //alignItems: "center",
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      display: "flex",
      alignItems: "center",

    }),
  };

  return (
    <div className="container">
      <div className="container-selects">
        <img id="imgLogo" src={logoIMG} />

        <ReactSelect
          className="select-control"
          styles={customStyles}
          options={memory}
          formatOptionLabel={({ name, description, image }) => (
            <div className="select-control-item">
              <img src={image} alt=" " />
              <p>{name}</p>
              <p>{description}</p>
            </div>
          )}
        />

        <ReactSelect
          className="select-control"
          styles={customStyles}
          options={motherboard}
          formatOptionLabel={({ name, description, image }) => (
            <div className="select-control-item">
              <img src={image} alt=" " />
              <div>
              <p>{name}</p>
              <p>{description}</p>
              </div>
            </div>
          )}
          placeholder="PLACA MÃE"
        />

        <ReactSelect
          className="select-control"
          styles={customStyles}
          options={powersupply}
          formatOptionLabel={({ name, description, image }) => (
            <div className="select-control-powersupply">
              <img src={image} alt=" " />
              <p>{name}</p>
              <p>{description}</p>
            </div>
          )}
          placeholder="FONTE"
        />

        <ReactSelect
          className="select-control"
          styles={customStyles}
          options={processor}
          formatOptionLabel={({ name, description, image }) => (
            <div className="select-control-processor">
              <img src={image} alt=" " />
              <p>{name}</p>
              <p>{description}</p>
            </div>
          )}
          placeholder="PROCESSADOR"
        />
        <button>Salvar</button>
      </div>
    </div>
  );
};
