import Representantes from "../../shared/Representantes";
import "./TabUsers.css";
import { Link } from "react-router-dom";

const TabRep = () => {
  return (
    <div className="container-table">
      <h1>Tabela de Representantes</h1>
      <table cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Turma</th>
            <th>Período</th>
            <th>Curso</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Representantes.map((item) => (
            <tr key={item.rm}>
              <td>{item.nome}</td>
              <td>{item.turma}</td>
              <td>{item.periodo}</td>
              <td>{item.curso}</td>
              <td>{item.email}</td>
              <td>
                <Link to={`/edituser/${item.rm}`}>Editar</Link>
                <button>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabRep;
