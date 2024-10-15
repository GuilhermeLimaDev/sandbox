import "./CardsReports.css";
import reports from "../../shared/Reports";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Teste from "../../assets/imgteste.jpg";
import { useState } from "react";
import listCard from "../../assets/listCard.png";
import windowCard from "../../assets/windowCard.png";
import { Link } from "react-router-dom";

const CardsReports = () => {
  const [tabs, setTabs] = useState("all");
  const [displayMethod, setDisplayMethod] = useState("card");
  var Dados = "";

  const dado = () => {
    switch (tabs) {
      case "all":
        Dados = reports;
        return reports;
      case "pendentes":
        Dados = reports.filter((report) => report.codStatus === 1);
        return Dados;
      case "concluidos":
        Dados = reports.filter((report) => report.codStatus === 0);
        return Dados;
    }
  };
  var Reports = dado();

  const renderContainer = () => {
    switch (displayMethod) {
      case "list":
        return <ReportsInLista />;
      case "card":
        return <ReportsInCards />;
    }
  };

  const ReportsInCards = () => {
    const settings = {
      centerMode: true,
      infinite: true,
      slidesToShow: 2,
      speed: 500,
      rows: 2,
      slidesPerRow: 1,
    };
    return (
      <Slider {...settings}>
        {Reports.map((report) => (
          <div key={report.id} className="reports">
            <div className="div-img">
              <img src={Teste} />
            </div>
            <div className="informations">
              <p>
                <strong>ID do Report: {report.id}</strong> <br />
                Feito por: {report.nomeUsuario} <br /> ID do Usuário:{" "}
                {report.idUsuario}
              </p>
              <h1>{report.titulo}</h1>
              <p id="desc">{report.desc}</p>
              <a href={`/inforeport/${report.id}`}>Visitar report</a>
            </div>
          </div>
        ))}
      </Slider>
    );
  };

  const ReportsInLista = () => (
    <table cellPadding="10" cellSpacing="0">
      <thead>
        <tr>
          <th>Id</th>
          <th>Titulo</th>
          <th>Dia</th>
          <th>Hora</th>
          <th>Local</th>
          <th>Nome Usuário</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {Reports.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.titulo}</td>
            <td>{item.dia}</td>
            <td>{item.hora}</td>
            <td>{item.local}</td>
            <td>{item.nomeUsuario}</td>
            <td>
              <Link to={`/inforeport/${item.id}`}>Visualizar</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const contReports = Reports.length;

  return (
    <>
      <div className="main-cards-reports">
        <div className="FilterCards">
          <div className="tabs-button">
            <button
              onClick={() => setTabs("all")}
              style={{
                backgroundColor:
                  tabs === "all" ? "rgba(255, 255, 255, 0.2)" : "transparent",
              }}
            >
              All Reports
            </button>
            <button
              onClick={() => setTabs("pendentes")}
              style={{
                backgroundColor:
                  tabs === "pendentes"
                    ? "rgba(255, 255, 255, 0.2)"
                    : "transparent",
              }}
            >
              Pendentes
            </button>
            <button
              onClick={() => setTabs("concluidos")}
              style={{
                backgroundColor:
                  tabs === "concluidos"
                    ? "rgba(255, 255, 255, 0.2)"
                    : "transparent",
              }}
            >
              Concluidos
            </button>
          </div>
          <div className="display-cards">
            <button
              onClick={() => setDisplayMethod("list")}
              style={{
                borderBottom:
                  displayMethod === "list" ? "2px solid #6d56fc" : "none",
              }}
            >
              <img src={listCard} />
              List
            </button>
            <button
              onClick={() => setDisplayMethod("card")}
              style={{
                borderBottom:
                  displayMethod === "card" ? "2px solid #6d56fc" : "none",
              }}
            >
              <img src={windowCard} />
              Cards
            </button>
          </div>
        </div>
        <p style={{ color: "#fff", margin: "20px 0px" }}>
          Foram encontrados {contReports} reports...
        </p>

        <div className="section-reports">{renderContainer()}</div>
      </div>
    </>
  );
};

export default CardsReports;
