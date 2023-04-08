//Componentes
import { useEffect, useState } from "react";
import { useResgate } from "./hook/useResgate";

//Estilos
import "./App.css";
import { Alunos } from "./components/Alunos";

function App() {
  const url = "http://localhost:3000/students";

  const { chamada, setChamada, resgate } = useResgate(url);

  const [nome, setNome] = useState("");
  const [sexo, setSexo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novoAluno = {
      name: nome,
      gender: sexo,
    };
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(novoAluno),
    });

    const data = await res.json();

    setChamada((previous) => [...previous, data]);

    setNome("");
    setSexo("");
  };

  const handleDelete = async (id) => {
    const itemID = `${url}/${id}`;

    const res = await fetch(itemID, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });

    const json = await fetch(url);
    const data = await json.json();
    setChamada(data);
  };

  return (
    <div className="App">
      <h1>Lista de alunos - Sala 303</h1>

      {chamada.map((aluno) => (
        <Alunos
          key={aluno.id}
          name={aluno.name}
          gender={aluno.gender}
          url={url}
          handleDelete={() => handleDelete(aluno.id)}
        />
      ))}

      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome: </span>

          <input
            type="text"
            name="nome"
            placeholder="Insira o nome"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
            required
          />
        </label>

        <div>
          <span>Sexo: </span>

          <label className="radio">
            <span>Feminino</span>
            <input
              type="radio"
              name="sexo"
              onChange={(e) => setSexo(e.target.value)}
              value="feminino"
            />
          </label>
          <label className="radio">
            <span>Masculino</span>
            <input
              type="radio"
              name="sexo"
              onChange={(e) => setSexo(e.target.value)}
              value="masculino"
            />
          </label>
        </div>

        <button className="btn"> Inserir novo aluno</button>
      </form>
    </div>
  );
}

export default App;
