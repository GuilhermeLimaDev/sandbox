import { useState } from "react";
import "./NavUser.css";
import FormularioRep from "../cadUsuarios/CadUsers";
import TabRep from "../tabUsers/TabRep";
import FormularioFunc from "../cadUsuarios/CadUsers2";
import TabFunc from "../tabUsers/TabFunc";

const NavUser = () => {
  const [filter, setFilter] = useState("rep");
  const renderContainer = () => {
    switch (filter) {
      case "rep":
        return (
          <>
            <TabRep />
            <FormularioRep />
          </>
        );
      case "func":
        return (
          <>
            <TabFunc />
            <FormularioFunc />
          </>
        );
    }
  };
  return (
    <>
      <header className="header">
        <h1>Usuários</h1>
        <div className="buttonsOfNavUsers">
          <button id="filterButton">Filtrar</button>
          <a href="#addUser" id="addUsers">
            + Add Users
          </a>
        </div>
      </header>

      <div className="FilterCards">
        <div className="tabs-button">
          <button
            value="rep"
            id="btn1"
            onClick={() => setFilter("rep")}
            style={{
              backgroundColor:
                filter === "rep" ? "rgba(255, 255, 255, 0.2)" : "transparent",
            }}
          >
            Representantes
          </button>
          <button
            value="func"
            id="btn2"
            onClick={() => setFilter("func")}
            style={{
              backgroundColor:
                filter === "func" ? "rgba(255, 255, 255, 0.2)" : "transparent",
            }}
          >
            Funcionários
          </button>
        </div>

        <div className="searchId">
          <input type="search" placeholder="Procurar pelo id" />
          <button>ENVIAR</button>
        </div>
      </div>

      {renderContainer()}
    </>
  );
};
export default NavUser;
