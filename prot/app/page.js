import "./styles.css";
import Link from "next/link"
const logoIMG = "/logoIMG.webp";

export default function Home(){
  return (
    <div className="container">
      <div>
        <img id="imgLogo" src={logoIMG} />
      </div>
      <div className="flex flex-col justify-around" style={{height: "25vh"}}>
        <p>O que deseja fazer?</p>
        <Link href="/login">
          <button className="home-button rounded-md">
          Login
        </button>
        </Link>
        <Link href="/montar">
        <button className="home-button rounded-md">
          Montar PC
        </button>
        </Link>
        <Link href="/">
        <button className="home-button rounded-md">
          Gerenciar Peças
        </button>
        </Link>
        <Link href="/">
        <button className="home-button rounded-md">
          Deslogar
        </button>
        </Link>
      </div>
    </div>
  );
};