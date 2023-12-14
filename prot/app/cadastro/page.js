'use client'
import Link from 'next/link';
import { LayoutComponents } from "../../components/LayoutComponents";
import { useState } from 'react';
//import logoIMG from '../../assets/logoIMG.webp'; 
const logoIMG = "/logoIMG.webp"

export default function Register(){
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [name, setName] = useState("")

   return (
      <LayoutComponents>
         <form className="login-form">
            <span className="login-form-title">Criar Conta</span>

            <span className="login-form-title">
               <img src={logoIMG} alt="logoImg"/>
            </span>

            <div className="wrap-input">
               <input 
                  className={name !== "" ? 'has-val input' : 'input'}
                  type="name"
                  value={name}
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
                  className={password !== "" ? 'has-val input' : 'input'}
                  type="password"
                  value={password}
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