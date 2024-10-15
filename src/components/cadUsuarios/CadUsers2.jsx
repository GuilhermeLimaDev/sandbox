import React, { useState, useEffect } from "react";
import "./CadUsers.css";
import axios from "axios";

const FormularioFunc = () => {

  const [clicou, setClicou] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    cargo: "",
    senha: "",
    email: "",
  });
  
  const [tempData, setTempData] = useState({
    nome: "",
    cargo: "",
    senha: "",
    email: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempData({ ...tempData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(tempData); 
    setClicou(true)
  };


  const enviarDados = () =>{
    axios.post('http://localhost:8080/funcionario', 
      formData
  ).then(response => console.log(response))
  .then(formData => alert('Dados enviados com sucesso'))
  .catch(error => console.log(error))
  }

  useEffect(()=>{
    clicou ? enviarDados() : console.log('app no ar')
    return (()=>setClicou(false))
 }, [clicou])

 
  return (
    <div className="forms" id="addUser">
      <h1>Cadastrar funcionários</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome:
            <input
              type="text"
              name="nome"
              value={tempData.nome}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Cargo:
            <input
              type="text"
              name="cargo"
              value={tempData.cargo}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Senha:
            <input
              type="password"
              name="senha"
              value={tempData.senha}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            E-mail:
            <input
              type="email"
              name="email"
              value={tempData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioFunc;
