import React, { useState } from "react";
import "./CadUsers.css";

const FormularioRep = () => {
  const [formData, setFormData] = useState({
    rm: "",
    nome: "",
    turma: "",
    periodo: "",
    curso: "",
    senha: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="forms" id="addUser">
      <h1>Cadastrar representante</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            RM:
            <input
              type="text"
              name="rm"
              value={formData.rm}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Nome:
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Turma:
            <input
              type="text"
              name="turma"
              value={formData.turma}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Período:
            <input
              type="text"
              name="periodo"
              value={formData.periodo}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Curso:
            <input
              type="text"
              name="curso"
              value={formData.curso}
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
              value={formData.senha}
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
              value={formData.email}
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

export default FormularioRep;
