import ComunidadeAmigos from "./ComunidadeAmigos";
import ComunidadePesqusa from "./ComunidadePesquisa";

function ComunidadeTop({ usuarios, usuario, funcaoMostraPesquisa, mostraPesquisa, usuariosAchados, mandaSolicitacao, pedidos, aceitaPedido}) {
  
    usuario.amigos.pedidos = pedidos

    localStorage.setItem('Usuarios', JSON.stringify(usuarios))

    return (
        <div className="w-[90%] mx-auto my-6">
            <div className=" flex justify-around text-[2vw] font-bold text-azulMahindra">
                <h2>Seu perfil</h2>
                <h2>Amigos(2)</h2>
            </div>
            <div className="flex justify-between mt-4">
                <div className="flex justify-between gap-6 items-center">
                    <div className="h-[15vw] w-[15vw] bg-[#A9B7CC] rounded-full">

                    </div>
                    <div className="h-full flex flex-col justify-evenly">
                        <div>
                            <h2 className="text-[2vw] font-semibold">{usuario.nome}</h2>
                            <h3 className="text-azulMahindra font-semibold">@{usuario.nome}</h3>
                        </div>
                        <h2 className="text-[2.3vw]">Pontuação: <span className="text-azulMahindra font-semibold">{usuario.quizzes.pontos} pontos</span></h2>
                    </div>
                </div>
                <div className="h-auto w-[2px] bg-azulMahindra"></div>
                <div className="w-1/3 flex flex-col justify-around gap-3">
                    <input onChange={(e) => funcaoMostraPesquisa(e.target.value)} type="text" placeholder="digite o nome do usuario para add" className="bg-[#EDEDED] w-full px-[1rem] py-1 rounded-full border-2 border-[#A9B7CC]" />
                    <div>
                       <ComunidadeAmigos 
                            show={mostraPesquisa}
                            pedidos={pedidos}
                            aceitaPedido={aceitaPedido}
                       />

                       {
                            mostraPesquisa == 'hidden' ? <ComunidadePesqusa usuariosAchados={usuariosAchados} mandaSolicitacao={mandaSolicitacao}/> : ''
                       }

                        <h4 className="text-azulMahindra font-semibold text-[1.5vw]">Amigos</h4>
                        <ul className="text-[1.5vw] mx-3">
                            {
                                usuario.amigos.amigos.map((amigo) => <li>{usuarios[amigo - 1].nome}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComunidadeTop;