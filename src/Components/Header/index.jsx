import "./style.css";
import "../../Styles/margin.css";
import OptionsMenuIcon from "../../Assets/OptionsMenuIcon.svg";
import EditHeaderIcon from "../../Assets/EditHeaderIcon.svg";
import ExitHeaderIcon from "../../Assets/ExitHeaderIcon.svg";
import { useState } from "react";

function Header({ title }) {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <header>
      <div className="header-border">
        <div>
          <h2 className="header__title">{title}</h2>
        </div>

        <div className="header__side-right">

          <div className="header__circle mr-16">
            <h1>LR</h1>
          </div>

          <h3 className="mr-13">Lorena</h3>

          <img
            src={OptionsMenuIcon}
            alt="Opções do menu"
            className="optionsMenuIcon"
            onClick={() => setShowOptions(!showOptions)}
          />
          {showOptions &&
            <div className="options-container">
              <div className="options__triangle" />
              <div className="option mr-16">
                <img
                  src={EditHeaderIcon}
                  alt="Editar"
                  className="mb-8"
                />
                <h4>Editar</h4>
              </div>

              <div className="option">
                <img
                  src={ExitHeaderIcon}
                  alt="Sair"
                  className="option__exit--margin"
                />
                <h4 className="option--font">Sair</h4>
              </div>
            </div>}
        </div>
      </div>
    </header>
  );
}

export default Header;
