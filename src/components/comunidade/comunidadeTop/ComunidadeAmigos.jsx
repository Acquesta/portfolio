import { useState } from "react";

function ComunidadeAmigos({ show, pedidos, aceitaPedido }) {

    const usuarios = JSON.parse(localStorage.getItem('Usuarios'))

    let pedidosUsuarios = []
    usuarios.forEach(usuario => {
        pedidos.forEach(pedido => {
            if(pedido == usuario.id) {
                pedidosUsuarios.push(usuario)
            }
        })
    })

    console.log(pedidos);

    return (
        <div className={`${show}`}>
                <h4 className="text-azulMahindra font-semibold text-[1.5vw]">Solicitações</h4>
                {
                    pedidos.length != 0 ? (

                        pedidosUsuarios.map(usuario => (
                            
                            <div className="flex justify-between" key={usuario.id}>
                                <p>{usuario.nome}</p>
                                <div className="flex justify-between gap-1">
    
                                    <div onClick={() => aceitaPedido(usuario.id)} className="w-5 h-5 border-[1px] border-[#A9B7CC] rounded-[4px] flex justify-center items-center cursor-pointer">
                                        <svg className="w-4 h-4 size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                            stroke="green">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <div className="w-5 h-5 border-[1px] border-[#A9B7CC] rounded-[4px] flex justify-center items-center cursor-pointer">
                                        <svg className="w-4 h-4 size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
    
                                    </div>
                                </div>
                            </div>
                        ))

                    ) : <p className="ml-3">Nenhuma solicitação</p>

                }
        </div>
    );
}

export default ComunidadeAmigos;