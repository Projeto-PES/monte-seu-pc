'use client'
import Link from 'next/link';
import { useState } from 'react';
//import logoIMG from '@/public/logoIMG.webp'; 
import { LayoutComponents } from '../../components/LayoutComponents';
const logoIMG = "/logoIMG.webp"

export default function Login (){
   const [email, setEmail] = useState("")
   const [senha, setsenha] = useState("")

   function handleLogin(e) {
      e.preventDefault();
  
      const data = { email, senha };
      console.log(JSON.stringify(data));
  
      fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((respostaJson) => {
          console.log("Resposta do servidor:", respostaJson);
          navigate("/");
        })
        .catch((error) => {
          console.error("Erro ao enviar requisição:", error);
        });
    }

   return (
      <LayoutComponents>
         <form className="login-form" onSubmit={handleLogin}>
            <span className="login-form-title">Bem Vindo</span>

            <span className="login-form-title">
               <img src={logoIMG} alt="logoImg"/>
            </span>

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
                  onChange={e => setsenha(e.target.value)}
               />
               <span className="focus-input" data-placeholder="Password"></span>
            </div>  

            <div className="container-login-form-button">
               <button className="login-form-button">LOGIN</button>
            </div>

            <div className="text-center">
            <span className="txt1">Não possui conta?</span>
               <Link className="txt2" href="/cadastro">Criar conta</Link>
            </div>
         </form>
      </LayoutComponents>
   );
}