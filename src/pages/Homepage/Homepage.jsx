import { useState } from "react";
import "./Homepage.css";
import Information from "../../pages/information/Information";
import Register from "../../pages/Register/Register";
import Reports from "../Reports/Reports";

const Homepage = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const renderContent = () => {
    switch (activeTab) {
      case "tab1":
        return <Reports />;
      case "tab2":
        return <Register />;
      case "tab3":
        return <Information />;
    }
  };
  return (
    <>
      <header className="header-principal">
        <nav>
          <button onClick={() => setActiveTab("tab1")}>REPORTS</button>
          <button onClick={() => setActiveTab("tab2")}>USUÁRIOS</button>
          <button onClick={() => setActiveTab("tab3")}>INFORMAÇÕES</button>
        </nav>
        <h1>GERENCIAMENTO DE AMBIENTES ESCOLARES</h1>
      </header>

      <div className="main-homepage"> {renderContent()}</div>
    </>
  );
};

export default Homepage;
