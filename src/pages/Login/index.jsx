import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logoIMG from "../../assets/small-logo.webp";
import { LayoutComponents } from "../../components/LayoutComponents";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LayoutComponents>
      <form className="login-form">
        <span className="login-form-title">Bem Vindo</span>

        <span className="login-form-title">
          <img src={logoIMG} alt="logoImg" onClick={() => navigate("/")} />
        </span>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="container-login-form-button">
          <button className="login-form-button">LOGIN</button>
        </div>

        <div className="text-center">
          <span className="txt1">Não possui conta?</span>
          <Link className="txt2" to="/register">
            Criar conta
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
