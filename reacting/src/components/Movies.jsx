import React from 'react'
import './Movies.css'

function Movies({title, year, awards, rating, record, id}) {

    const handleShow = () =>{
        console.log("Você acabou de clicar e disparou uma função")
    }

    return (

    <div>

        <h2>{title}</h2>

        <ul>
            <li> Ano do lançamento:{year}</li>
            <li className='purple'> número: { id }</li>
            <li> Prêmios recebidos:{awards}</li>
            <li> Avaliação do Público:{rating}</li>
        </ul>
        { record ? <p style={{"color":"green"}}> Bateu récorde de bilheteria!!</p> : <p style={{"color":"red"}}> Não bateu récorde de público, mas o stúdio teve retorno considerável!</p>}

        <button className='btn' onClick={handleShow}> Clique aqui</button>

    </div>    
   
    )
}

export default Movies