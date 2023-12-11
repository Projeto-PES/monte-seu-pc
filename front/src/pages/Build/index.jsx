import "./styles.css";
import ReactSelect from "react-select";
import Logo from "../../assets/logo.png";

export const Build = () => {
  const countries = [
    { value: "me", label: "Montenegro", image: "../../assets/logo.png" },
    { value: "rs", label: "Serbia", image: "../../assets/logo.png" },
  ];

  return (
    <div className="container">
      <img src={Logo} alt="" />
      {countries.map((element) => (
        <ReactSelect
          value={element.value}
          options={countries}
          formatOptionLabel={({ label }) => (
            <div>
              <img src={element.image} alt="" />
              <p>{label}</p>
              <p>Descrição...</p>
            </div>
          )}
        />
      ))}
    </div>
  );
};
