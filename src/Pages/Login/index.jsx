import "./style.css";
import Button from "../../Components/Button";
import InputPassword from "../../Components/InputPassword";
import InputText from "../../Components/InputText";
import { useState } from "react";

export default function Login() {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  return (
    <div className="containerLogin">
      <div className="loginLeft">
        <div className="loginLeftContent">
          <h3>Gerencie todos os pagamentos da sua empresa em um só lugar.</h3>
        </div>
      </div>
      <div className="loginRight">
        <form className="loginForm">
          <InputText name={"Nome"} />
          <InputPassword name={"Senha"} values={values} setValues={setValues} />
          <Button name={"Entrar"} />
        </form>
        <span>
          Ainda não possui uma conta? <a href="google">Cadastre-se</a>
        </span>
      </div>
    </div>
  );
}