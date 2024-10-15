import { useParams } from "react-router-dom";
import reports from "../../shared/Reports";
import "./InfoReport.css";
import Slider from "react-slick";
import Images from "../../shared/Images";
import calendar from "../../assets/calendar.svg";
import clock from "../../assets/clocks.svg";
import home from "../../assets/home.svg";
import { Link } from "react-router-dom";

const InfoReport = () => {
  const { id } = useParams();
  const reportsid = id ? parseInt(id) : undefined;
  const report = reportsid
    ? reports.find((r) => r.id === reportsid)
    : undefined;

  var settings = {
    className: "sliders",
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  return (
    <>
      <div className="main-homepage">
        <main className="main-info">
          <div className="header-info">
            <Link to={"/"} id="link-homepage">
              <img src={home} />
              Homepage
            </Link>
            <h1>{report.titulo}</h1>
            <p>
              Feito por {report.nomeUsuario} - {report.idUsuario}
            </p>
            <p>Id do report: {report.id}ㅤ</p>
          </div>
          <div className="sectioninfo1">
            <div className="images">
              <Slider {...settings}>
                {Images.map((index) => (
                  <img key={index.id} src={index.image} />
                ))}
              </Slider>
            </div>
            <div className="summary">
              <label>
                <h4>Status</h4>
                <p>{report.codStatus == 1 ? "Pendente" : "Concluído"}</p>
              </label>
              <label>
                <h4>Descrição</h4>
                <p>{report.desc}</p>
              </label>
              <label>
                <h4>Local</h4>
                <p>{report.local}</p>
              </label>
              <label>
                <h4>Data</h4>
                <div id="labeldatehour">
                  <p id="datehour">
                    <img src={calendar} />
                    {report.dia}
                  </p>
                  <p id="datehour">
                    <img src={clock} />
                    {report.hora}
                  </p>
                </div>
              </label>
            </div>
          </div>
          <div className="response">
            <h4>Escreva uma resposta para ser enviada ao e-mail do aluno.</h4>
            <textarea placeholder="Escreva sua resposta"></textarea>
            <button id="button1">Enviar Resposta</button>
          </div>
          <div className="buttons">
            <button id="button1">Marcar como concluído</button>
            <button id="button2">Fechar</button>
          </div>
        </main>
      </div>
    </>
  );
};

export default InfoReport;
