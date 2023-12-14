import "./styles.css";
import { useNavigate } from "react-router-dom";
import logoIMG from "../../assets/logoIMG.webp";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div>
        <img id="imgLogo" src={logoIMG} />
      </div>
      <div className="buttons-container">
        <p>O que deseja fazer?</p>
        <button className="home-button" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="home-button" onClick={() => navigate("/build")}>
          Montar PC
        </button>
      </div>
    </div>
  );
};
