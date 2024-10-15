
import "./TabUsers.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


const TabFunc = () => {
  const [Funcionarios, setFuncionarios] = useState([])

  const receberDados = () =>{
    axios.get('http://localhost:8080/funcionario').then(response =>{
       setFuncionarios(response.data)
    }).catch(error => console.log(error))
  } 
  
  useEffect(()=>{
   receberDados()
  },[])

  return (
    <div className="container-table">
      <h1>Tabela de Funcionarios</h1>
      <table cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Funcionarios.map((item) => (
            <tr key={item.id}>
              <td>{item.nome}</td>
              <td>{item.cargo}</td>
              <td>{item.email}</td>
              <td>
                <Link to={`/edituser/${item.id}`}>Editar</Link>
                <button>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabFunc;
