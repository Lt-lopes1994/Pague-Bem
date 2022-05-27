import Button from "../../Components/Button/index";
import { useNavigate } from "react-router-dom";
import InputPassword from "../../Components/InputPassword";
import { useState } from "react";
import "./style.css";

export default function RegisterPassword({ activeStep, setActiveStep }) {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleNext = (e) => {
    e.preventDefault();

    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    navigate("/registerConcluded");
  };

  return (
    <div className="containerRegister">
      <div className="registerRight">
        <form className="registerForm">
          <h1>Escolha uma senha</h1>

          <div className="registerInput">
            <InputPassword
              name={"Senha"}
              values={values}
              setValues={setValues}
            />

            <InputPassword
              name={"Repetir senha"}
              values={values}
              setValues={setValues}
            />
          </div>
          <Button name={"Entrar"} handleClick={handleNext} />
        </form>
        <span>
          Já possui conta? Faça seu <a href="google">Login</a>
        </span>
        <div className="stepperFooter">
          <div className="horizontalLine first faded"></div>
          <div className="horizontalLine second "></div>
          <div className="horizontalLine third faded"></div>
        </div>
      </div>
    </div>
  );
}