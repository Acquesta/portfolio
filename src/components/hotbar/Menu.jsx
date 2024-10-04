import { NavLink } from "react-router-dom";

function Menu({ mostraMenu }) {

    // console.log(mostraMenu);

    return ( 
            <div className={`opacity-${mostraMenu} absolute bg-azulEscuro right-0 top-[44px] w-1/2 h-[100vh] text-center py-6 text-lg transition-opacity sm:relative sm:h-auto sm:top-0 sm:p-0 sm:opacity-[1]`}>
                <ul className="h-1/4 flex flex-col justify-around sm:flex-row ">
                    <li className="cursor-pointer hover:text-brancoDescricao transition-colors"><NavLink to='/'>Home</NavLink></li>
                    <li className="cursor-pointer hover:text-brancoDescricao transition-colors"><NavLink to='/sobre'>Sobre</NavLink></li>
                    <li className="cursor-pointer hover:text-brancoDescricao transition-colors"><NavLink to='/contato'>Contato</NavLink></li>
                </ul>
                <div className="opacity-0"></div>
                <div className="opacity-1"></div>
            </div>
     );
}

export default Menu;