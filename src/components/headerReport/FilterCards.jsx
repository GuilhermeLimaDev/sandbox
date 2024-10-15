import "./FilterCards.css";


const FilterCards = () => {
  const userLogado = "Guilherme";
  return (
    <>
      <header>
        <div className="header">
          <div className="welcomeUser">
            <p>
              Bem vindo, <strong>{userLogado}</strong>
            </p>
          </div>

          <div className="searchId">
            <input type="search" placeholder="Procurar pelo id" />
            <button>ENVIAR</button>
          </div>

          <div className="filter">
            <button id="filterButton">Filtrar</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default FilterCards;
