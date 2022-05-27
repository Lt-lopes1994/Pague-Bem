import Button from "../../Components/Button/index";
import checked from "../../Assets/Checked.svg";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function RegisterConcluded() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <div className="containerConcluded">
      <div className="registerRight">
        <form className="formConcluded">
          <img src={checked} alt="Checked" />
          <h3>Cadastro realizado com sucesso!</h3>

          <Button name={"Entrar"} handleClick={handleClick} />
        </form>

        <div className="stepperFooter">
          <div className="horizontalLine first faded"></div>
          <div className="horizontalLine second faded"></div>
          <div className="horizontalLine third "></div>
        </div>
      </div>
    </div>
  );
}