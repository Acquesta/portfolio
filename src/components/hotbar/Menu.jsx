
function Menu({ mostraMenu }) {

    // console.log(mostraMenu);

    return ( 
        <div className={`opacity-${mostraMenu} absolute bg-azulEscuro right-0 top-[44px] w-1/2 h-[100%] text-center py-6 text-lg transition-opacity`}>
            <ul className="h-1/4 flex flex-col justify-around">
                <li>Home</li>
                <li>Sobre</li>
                <li>Contato</li>
            </ul>
        </div>
       
     );
}

export default Menu;