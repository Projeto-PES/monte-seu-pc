import { useState } from 'react';
import logoIMG from '../assets/logoIMG.webp';
import styles from './FazerLogin.module.css'

function FazerLogin(){
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   return(
    <div className={styles.container}>
      <div className={styles.containerlogin}>
        <div className={styles.wraplogin}>
          <form className={styles.loginform}>

            <span className={styles.loginformtitle}>
              <img src={logoIMG} alt="logoImg"/>
            </span>

            <div className={styles.wrapinput}>
              <input 
                className={email !== "" ? 'has-val input' : 'input'}
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            <span className={styles.focusinput} data-placeholder="Email"></span>
            </div>

            <div className={styles.wrapinput}>
              <input 
                className={password !== "" ? 'has-val input' : 'input'}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
              <span className={styles.focusinput} data-placeholder="Password"></span>
            </div>  

            <div className={styles.containerloginformbutton}>
              <button className={styles.loginformbutton}>LOGIN</button>
            </div>

            <div className={styles.textcenter}>
              <span className={styles.txt1}>Não possui conta?</span>
              <a className={styles.txt2} href="criar-conta">Criar conta.</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  )

}

export default FazerLogin