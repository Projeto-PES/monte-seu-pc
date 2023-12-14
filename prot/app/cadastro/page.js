'use client'
import Link from 'next/link';
import { LayoutComponents } from "../../components/LayoutComponents";
import { useState } from 'react';
//import logoIMG from '../../assets/logoIMG.webp'; 
const logoIMG = "/logoIMG.webp"

export default function Register(){
   const [email, setEmail] = useState("")
   const [senha, setPassword] = useState("")
   const [nome, setName] = useState("")

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
         <form className="login-form" onSubmit={handleRegister}>
            <span className="login-form-title">Criar Conta</span>

            <span className="login-form-title">
               <img src={logoIMG} alt="logoImg"/>
            </span>

            <div className="wrap-input">
               <input 
                  className={nome !== "" ? 'has-val input' : 'input'}
                  type="name"
                  value={nome}
                  onChange={e => setName(e.target.value)}
               />
               <span className="focus-input" data-placeholder="Nome"></span>
            </div>

            <div className="wrap-input">
               <input 
                  className={email !== "" ? 'has-val input' : 'input'}
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
               <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
               <input 
                  className={senha !== "" ? 'has-val input' : 'input'}
                  type="password"
                  value={senha}
                  onChange={e => setPassword(e.target.value)}
               />
               <span className="focus-input" data-placeholder="Password"></span>
            </div>  

            <div className="container-login-form-button">
               <button className="login-form-button">CADASTRAR</button>
            </div>

            <div className="text-center">
            <span className="txt1">Já possui uma conta?</span>
               <Link className="txt2" href="/login">Acessar com email e senha</Link>
            </div>
         </form>
      </LayoutComponents>
   );
}