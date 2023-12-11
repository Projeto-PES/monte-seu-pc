import "./styles.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="" />
      <div className="text-center">
        <div className="container-login-form-button">
          <Link className="txt2" to="/login">
            <button className="login-form-button">Fazer Login</button>
          </Link>
        </div>
        <div className="container-login-form-button">
          <Link className="text-center" to="/build">
            <button className="login-form-button">Montar PC</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
