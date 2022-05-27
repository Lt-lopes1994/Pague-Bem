import "./style.css";
import HomeIcon from "../../Assets/HomeIcon.svg";
import HomeIconSelected from "../../Assets/HomeIconSelected.svg";
import ClientsIcon from "../../Assets/ClientsIcon.svg";
import ClientsIconSelected from "../../Assets/ClientsIconSelected.svg";
import ChargesIcon from "../../Assets/ChargesIcon.svg";

function SideBar({ selected }) {
  const lineTopPosition = 40 + selected * 165;
  return (
    <div className="sidebar-container">
      <div className="line" style={{ top: lineTopPosition }} />
      <div>
        <img
          src={selected === 0 ? HomeIconSelected : HomeIcon}
          alt="Home"
        />
        <h2
          className={selected === 0 ? "text--pink" : ""}
        >
          Home
        </h2>
      </div>
      <div>
        <img
          src={selected === 1 ? ClientsIconSelected : ClientsIcon}
          alt="Clientes"
        />
        <h2
          className={selected === 1 ? "text--pink" : ""}
        >
          Clientes
        </h2>
      </div>
      <div>
        <img src={ChargesIcon} alt="Cobranças" />
        <h2>Cobranças</h2>
      </div>
    </div>
  );
}

export default SideBar;