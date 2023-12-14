import { Link, useNavigate } from "react-router-dom";
import { LayoutComponents } from "../../components/LayoutComponents";
import { useState } from "react";
import logoIMG from "../../assets/small-logo.webp";

export const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    const data = { nome, email, senha };
    console.log(JSON.stringify(data));

    fetch("/api/cadastro", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((respostaJson) => {
        console.log("Resposta do servidor:", respostaJson);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Erro ao enviar requisição:", error);
      });
  }

  return (
    <LayoutComponents>
      <form onSubmit={handleRegister} className="login-form">
        <span className="login-form-title">Criar Conta</span>

        <span className="login-form-title">
          <img src={logoIMG} alt="logoImg" onClick={() => navigate("/")} />
        </span>

        <div className="wrap-input">
          <input
            className={nome !== "" ? "has-val input" : "input"}
            type="name"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>

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
            className={senha !== "" ? "has-val input" : "input"}
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Senha"></span>
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
