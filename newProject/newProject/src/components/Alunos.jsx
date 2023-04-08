import { useResgate } from '../hook/useResgate';

export const Alunos = ({id, name, gender, handleDelete}) => {

  return (
    <div>
        <div key={id} className="students">
          <h2>{name}</h2>
          <p>{gender}</p>

          <button onClick={() => handleDelete(id)}>
            Excluir aluno da chamada
          </button>
        </div>
    </div>
  )
}
