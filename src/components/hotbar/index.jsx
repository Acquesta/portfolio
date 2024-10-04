import { useState } from "react";
import Menu from "./Menu";
import Hamburguer from "./Hamburguer";

function Hotbar() {

    const [ menu, setMenu ] = useState('0')
    const [ hamburguer, setHamburguer ] = useState('hamburguer')

    const clicaHamburguer = () => {
        if(menu == '0'){
            setMenu('1')
            setHamburguer('fechar')
        }
        else{
            setMenu('0')
            setHamburguer('hamburguer')
        }
    }

    return ( 
        <div className="w-full flex justify-between bg-azulEscuro px-4 py-2 text-brancoTexto shadow-md fixed">
            <h2 className="font-bold text-xl">Portfólio</h2>
            <div onClick={() => clicaHamburguer()} className="w-[40px] flex flex-col justify-between p-1 sm:hidden s">
                <Hamburguer 
                    hamburguer={hamburguer}
                />
            </div>
            <Menu 
                mostraMenu = {menu}
            />
        </div>
     );
}

export default Hotbar;