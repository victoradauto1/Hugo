function Evento1() {

    function meuEvento1 (){
        console.log('Lula ladrão!!!')
    }
    return (
        <div>
            <p>Clique para evento:</p>
            <button onClick={meuEvento1}>Ativar!</button>
        </div>
    )
}

export default Evento1
