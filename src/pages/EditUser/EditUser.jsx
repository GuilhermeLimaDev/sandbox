import { useParams } from "react-router-dom";
import Representantes from "../../shared/Representantes";
import Funcionarios from "../../shared/Funcionarios";
import FormularioRep from "../../components/cadUsuarios/CadUsers";
import "./EditUser.css";
import { Link } from "react-router-dom";
import home from "../../assets/home.svg";
import FormularioFunc from "../../components/cadUsuarios/CadUsers2";

const EditUser = () => {
  const { id } = useParams();
  const idChegou = id ? parseInt(id) : undefined;

  if (Representantes.find((index) => index.rm === idChegou)) {
    var dadosRep = Representantes.find((index) => index.rm === idChegou);

    return (
      <>
        <div className="main-homepage">
          <main className="info-users">
            <header className="header-info">
              <h1>{dadosRep.nome}</h1>
              <p>Matricula: {dadosRep.rm}</p>
            </header>
            <section className="sectioninfo1">
              <div className="old-info">
                <label>
                  <h4>Matricula</h4>
                  <p>{dadosRep.rm}</p>
                </label>
                <label>
                  <h4>E-mail</h4>
                  <p>{dadosRep.email}</p>
                </label>
                <label>
                  <h4>Informações</h4>
                  <div>
                    <p>Periodo: {dadosRep.periodo}</p>
                    <p>Turma: {dadosRep.turma}</p>
                  </div>
                </label>
              </div>
              <div className="formEdit">
                <FormularioRep />
              </div>
            </section>
            <div className="buttons">
              <button id="button1">Confirmar</button>
              <button id="button2">Cancelar</button>
            </div>
          </main>
        </div>
      </>
    );
  } else {
    var dadosFunc = Funcionarios.find((index) => index.id === idChegou);

    return (
      <>
        <div className="main-homepage">
          <main className="info-users">
            <header className="header-info">
              <Link to={"/"} id="link-homepage">
                <img src={home} />
                Homepage
              </Link>
              <h1>{dadosFunc.nome}</h1>
              <p>Matricula: {dadosFunc.id}</p>
            </header>
            <section className="sectioninfo1">
              <div className="old-info">
                <label>
                  <h4>Matricula</h4>
                  <p>{dadosFunc.id}</p>
                </label>
                <label>
                  <h4>E-mail</h4>
                  <p>{dadosFunc.email}</p>
                </label>
                <label>
                  <h4>Informações</h4>
                  <div>
                    <p>Cargo: {dadosFunc.cargo}</p>
                  </div>
                </label>
              </div>
              <div className="formEdit">
                <FormularioFunc />
              </div>
            </section>
            <div className="buttons">
              <button id="button1">Confirmar</button>
              <button id="button2">Cancelar</button>
            </div>
          </main>
        </div>
      </>
    );
  }
};
export default EditUser;
