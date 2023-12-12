import "./styles.css";
import ReactSelect from "react-select";

export const Build = () => {
  const memory = [
    { name: "FURY - MEMÓRIA RAM 8GB", description: "ESSA MEMÓRIA POSSUI 8GB RAM", image: 'placa-mae.jpg'},
    { name: "XPG - MEMÓRIA RAM 16GB", description: "ESSA MEMÓRIA POSSUI 16GB RAM", image: 'placa-mae.jpg'},
    { name: "ASGARD - MEMÓRIA RAM 32GB", description: "ESSA MEMÓRIA POSSUI 32GB RAM", image: 'placa-mae.jpg'},
  ];

  const motherboard = [
    { name: "FURY - MEMÓRIA RAM 8GB", description: "x", image: 'placa-mae.jpg'},
    { name: "XPG - MEMÓRIA RAM 16GB", description: "y", image: 'placa-mae.jpg'},
    { name: "ASGARD - MEMÓRIA RAM 32GB", description: "z", image: 'placa-mae.jpg'},
  ];

  const powersupply = [
    { name: "FURY - MEMÓRIA RAM 8GB", description: "x", image: 'placa-mae.jpg'},
    { name: "XPG - MEMÓRIA RAM 16GB", description: "y", image: 'placa-mae.jpg'},
    { name: "ASGARD - MEMÓRIA RAM 32GB", description: "z", image: 'placa-mae.jpg'},
  ];

  const processor = [
    { name: "FURY - MEMÓRIA RAM 8GB", description: "x", image: 'placa-mae.jpg'},
    { name: "XPG - MEMÓRIA RAM 16GB", description: "y", image: 'placa-mae.jpg'},
    { name: "ASGARD - MEMÓRIA RAM 32GB", description: "z", image: 'placa-mae.jpg'},
  ];


  return (
    <div className="container">
      <div className="container-selects">

        <h1>MONTE SEU PC!</h1>

        <ReactSelect className="select-memory"
          options={memory}
          formatOptionLabel={({ name, description, image }) => (
            <div className="select-control-memory">
              <img src={image} alt=" " />
              <p>{name}</p>
              <p>{description}</p>
            </div>
          )}
          placeholder = "MEMÓRIA RAM"
        />

        <ReactSelect className="select-motherboard"
          options={motherboard}
          formatOptionLabel={({ name, description, image }) => (
            <div className="select-control-motherboard">
              <img src={image} alt=" "/>
              <p>{name}</p>
              <p>{description}</p>
            </div>
          )}
          placeholder = "PLACA MÃE"
        />

        <ReactSelect className="select-powersupply"
          options={powersupply}
          formatOptionLabel={({ name, description, image }) => (
            <div className="select-control-powersupply">
              <img src={image} alt=" "/>
              <p>{name}</p>
              <p>{description}</p>
            </div>
          )}
          placeholder = "FONTE"
        />

        <ReactSelect className="select-processor"
          options={processor}
          formatOptionLabel={({ name, description, image }) => (
            <div className="select-control-processor">
              <img src={image} alt=" "/>
              <p>{name}</p>
              <p>{description}</p>
            </div>
          )}
          placeholder = "PROCESSADOR"
        />
        
      </div>
    </div>
  );
};
