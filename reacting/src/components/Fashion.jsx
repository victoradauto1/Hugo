import React from 'react'


function Fashion({ type, id, color, model, size, isSet }) {
    return (

        <div>
            <h2>{type}</h2>

            <ul>
                <li>Produto número: {id}</li>
                <li>Cor: {color}</li>
                <li>Coleção: {model}</li>
                <li>Tamanhos disponíveis: {size}</li>
            </ul>

            { isSet ? <p style={{"color":"green"}}> Disponível no estoque da loja!</p> : <p style={{"color":"red"}}> Em falta!</p>}
        </div>
    )
}

export default Fashion