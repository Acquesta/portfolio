import { useParams } from "react-router-dom";
import ComunidadeTop from "./comunidadeTop/ComunidadeTop.jsx";
import InputsRank from "./inputsRank";
import ComunidadeRanks from "./comunidadeRanksAmigos";
import { useState } from "react";

function SectionComunidade() {

    const { id } = useParams();

    const usuarios = JSON.parse(localStorage.getItem('Usuarios'))
    const usuario = usuarios.find(usuario => usuario.id == id)

    const [showPesquisa, setShowPesquisa] = useState('block')
    const [mostraUsuarios, setMostraUsuarios] = useState()

    const [userPedidos, setUserPedidos] = useState(usuario.amigos.pedidos)


    function mostraPesquisa(value) {
        // console.log(value);
        if(value == ''){
            setShowPesquisa('block')
        }
        else{
            setShowPesquisa('hidden')
        }
        procuraUsuario(value)
    }

    function procuraUsuario(nomeUsuario){
        let usuariosAchados = usuarios.filter(usuario => (usuario.nome.toLowerCase().includes(nomeUsuario.toLowerCase())));
        // const usuario = usuarios.find(usuario => usuario.nome == nomeUsuario)
        console.log(usuariosAchados);
        setMostraUsuarios(usuariosAchados)
    }

    function mandaSolicitacao(idUsuario){
        const user = usuarios.find(user => user.id == idUsuario)
        user.amigos.pedidos.push(usuario.id)
        usuario.amigos.amigos.push(idUsuario)
        localStorage.setItem('Usuarios', JSON.stringify(usuarios))
    }    
    
    function aceitaPedido(idPedido){
        addAmigo(idPedido)    
        setUserPedidos(prev => prev.filter(pedido => pedido !== idPedido ))  
    }

    function resetarAmigos(){
        usuario.amigos = {
            amigos: [],
            pedidos: []
        }
        localStorage.setItem('Usuarios', JSON.stringify(usuarios))
    }

    function addAmigo(idPedido){
        usuario.amigos.amigos.push(idPedido)
        console.log(usuario.amigos.amigos);
        localStorage.setItem('Usuarios', JSON.stringify(usuarios))
    }

    return ( 
        <>
            <ComunidadeTop
                usuarios={usuarios}
                usuario={usuario}
                funcaoMostraPesquisa={mostraPesquisa}
                mostraPesquisa={showPesquisa}
                procuraUsuario={procuraUsuario}
                usuariosAchados={mostraUsuarios}
                mandaSolicitacao={mandaSolicitacao}
                pedidos={userPedidos}
                aceitaPedido={aceitaPedido}
            />
            <InputsRank />
            <ComunidadeRanks 
                usuarios={usuarios}
                usuario={usuario}
                amigos={usuario.amigos.amigos}
            />
        </>
     );
}

export default SectionComunidade;