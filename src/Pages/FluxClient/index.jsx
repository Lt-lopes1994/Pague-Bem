import "../../Styles/button.css";
import SideBar from "../../Components/SideBar/index.jsx";
import ClientsIcon from "../../Assets/ClientsIcon.svg";
import PlusIcon from "../../Assets/PlusIcon.svg";
import FilterIcon from "../../Assets/FilterIcon.svg";
import MagnifierIcon from "../../Assets/MagnifierIcon.svg";
import EnhancedTable from "../../Components/ClientsTable/index.jsx";
import Header from "../../Components/Header/index.jsx";
import "./style.css";
import "../../Styles/margin.css";


function FluxClient() {
  return (
    <div className="flux-container">
      <SideBar
        selected={1}
      />
      <div className="client-container">
        <Header
          title=""
        />
        <section className="main-section mt-24">
          <div className="main__header mb-30">

            <img
              src={ClientsIcon}
              alt="Icone de clientes"
              className="clientsIcon mr-16"
            />

            <h2>Clientes</h2>

            <button className="buttonBase ml-auto mr-16">
              <img
                src={PlusIcon}
                alt="Adicionar Cliente"
                className="mr-6"
              />
              Adicionar cliente
            </button>

            <button className="buttonFilter mr-16">
              <img
                src={FilterIcon}
                alt="Filtro"
              />
            </button>

            <div className="inputSearch-container">
              <input
                className='inputSearch'
                type="text"
                placeholder="Pesquisar"
              />
              <img
                src={MagnifierIcon}
                alt="Pesquisar"
                className="magnifierIcon"
              />
            </div>

          </div>

          <EnhancedTable />

        </section>
      </div>
    </div>
  );
}

export default FluxClient;