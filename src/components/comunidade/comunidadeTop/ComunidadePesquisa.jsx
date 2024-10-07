function ComunidadePesqusa({ usuariosAchados, mandaSolicitacao }) {
    return ( 
        <>
            <h4 className="text-azulMahindra font-semibold text-[1.5vw]">Pesquisa</h4>
            {
                usuariosAchados.map((usuario) => (
                    <div className="flex justify-between mx-3 my-1" key={usuario.nome}>
                        <p>{usuario.nome}</p>
                        <h2 onClick={() => mandaSolicitacao(usuario.id)} className="text-correta font-bold cursor-pointer">Enviar</h2>
                    </div>
                ))
            }
        </>
     );
}

export default ComunidadePesqusa;