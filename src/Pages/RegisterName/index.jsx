import Button from "../../Components/Button/index";
import { useNavigate, Link } from "react-router-dom"; //eslint-disable-line
import InputText from "../../Components/InputText";
import "./style.css";

export default function RegisterName({ activeStep, setActiveStep }) {
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();

    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    navigate("/registerPassword");
  };

  return (
    <div className="containerRegister">
      <div className="registerRight">
        <form className="registerForm">
          <h1>Adicione seus dados</h1>

          <div className="registerInput">
            <InputText name={"Nome *"} />

            <InputText name={"E-mail *"} />
          </div>
          <Button name={"Continuar"} handleClick={handleNext} />
        </form>
        <span>
          Já possui conta? Faça seu <a href="/login">Login</a>
        </span>
        <div className="stepperFooter">
          <div className="horizontalLine first "></div>
          <div className="horizontalLine second faded"></div>
          <div className="horizontalLine third faded"></div>
        </div>
      </div>
    </div>
  );
}