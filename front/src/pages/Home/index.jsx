import { Link } from "react-router-dom";

export const Home = () => {
  return (
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
  );
};
