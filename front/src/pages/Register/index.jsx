import { Link, useNavigate } from "react-router-dom";
import { LayoutComponents } from "../../components/LayoutComponents";
import { useState } from "react";
import logoIMG from "../../assets/logoIMG.webp";
import api from "../../utils/api";

export const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    const body = { email, name, password };
    console.log(body);
    api
      .register(body)
      .then(() => navigate("/login").catch((error) => console.log(error)));
  }

  return (
    <LayoutComponents>
      <form onSubmit={handleRegister} className="login-form">
        <span className="login-form-title">Criar Conta</span>

        <span className="login-form-title">
          <img src={logoIMG} alt="logoImg" />
        </span>

        <div className="wrap-input">
          <input
            className={name !== "" ? "has-val input" : "input"}
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="container-login-form-button">
          <button type="submit" className="login-form-button">
            CADASTRAR
          </button>
        </div>

        <div className="text-center">
          <span className="txt1">Já possui uma conta?</span>
          <Link className="txt2" to="/login">
            ACESSAR COM EMAIL E SENHA
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
