import "./styles.css";
import ReactSelect from "react-select";
import Logo from '../../assets/fundo.png'

export const Build = () => {
  const memory = [
    { name: "FURY - MEMÓRIA RAM 8GB", description: "x", image: '../../assets/fundo.png'},
    { name: "XPG - MEMÓRIA RAM 16GB", description: "y", image: '../../assets/fundo.png'},
    { name: "ASGARD - MEMÓRIA RAM 32GB", description: "z", image: '../../assets/fundo.png'},
  ];

  const motherboard = [
    { name: "FURY - MEMÓRIA RAM 8GB", description: "x", image: '../../assets/logoIMG.webp'},
    { name: "XPG - MEMÓRIA RAM 16GB", description: "y", image: '../../assets/logoIMG.webp'},
    { name: "ASGARD - MEMÓRIA RAM 32GB", description: "z", image: '../../assets/logoIMG.webp'},
  ];

  const powersupply = [
    { name: "FURY - MEMÓRIA RAM 8GB", description: "x", image: '../../assets/logoIMG.webp'},
    { name: "XPG - MEMÓRIA RAM 16GB", description: "y", image: '../../assets/logoIMG.webp'},
    { name: "ASGARD - MEMÓRIA RAM 32GB", description: "z", image: '../../assets/logoIMG.webp'},
  ];

  const processor = [
    { name: "FURY - MEMÓRIA RAM 8GB", description: "x", image: '../../assets/logoIMG.webp'},
    { name: "XPG - MEMÓRIA RAM 16GB", description: "y", image: '../../assets/logoIMG.webp'},
    { name: "ASGARD - MEMÓRIA RAM 32GB", description: "z", image: '../../assets/logoIMG.webp'},
  ];


  return (
    <div className="container">
      <ReactSelect className="select-memory"
        options={memory}
        formatOptionLabel={({ name, description, image }) => (
          <div>
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>{description}</p>
          </div>
        )}
        placeholder = "MEMÓRIA RAM"
      />

      <ReactSelect className="select-motherboard"
        options={motherboard}
        formatOptionLabel={({ name, description, image }) => (
          <div>
            <img src={image} alt=""/>
            <p>{name}</p>
            <p>{description}</p>
          </div>
        )}
        placeholder = "PLACA MÃE"
      />

      <ReactSelect className="select-powersupply"
        options={powersupply}
        formatOptionLabel={({ name, description, image }) => (
          <div>
            <img src={image} alt=""/>
            <p>{name}</p>
            <p>{description}</p>
          </div>
        )}
        placeholder = "FONTE"
      />

      <ReactSelect className="select-processor"
        options={processor}
        formatOptionLabel={({ name, description, image }) => (
          <div>
            <img src={image} alt=""/>
            <p>{name}</p>
            <p>{description}</p>
          </div>
        )}
        placeholder = "PROCESSADOR"
      />
  </div>
  );
};
