
import React from 'react'
import { useState } from 'react'

export const Formulario = () => {

    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name,
            job,
            email,
        }
        setName("")
        setJob("")
        setEmail("");
        console.log(user)
    }

  return (
    <div>
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome: </span>
                <input type="text" name="Nome" placeholder="Insira o nome" onChange={(e) => setName(e.target.value)} value={name}/>
            </label>
            <label>
                <span>Profissão: </span>
                <input type="text" name="Profissão" placeholder="Insira a profissão" onChange={(e) => setJob(e.target.value)} value={job}/>
            </label>
            <label>
                <span>E-mail: </span>
                <input type="email" name="E-mail" placeholder="Insira o e-mail" onChange={(e) => setEmail(e.target.value)} value={email} required/>
            </label>
            <button>Cadastrar</button>
        </form>
    </div>
  )
}