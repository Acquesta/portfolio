


function Card({ card }) {
    return ( 
        <div className="md:flex bg-azulClaro rounded-xl my-5">
            <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src={card.imagem} alt="Logo da fiap faculdade"/>
            </div>
            <div className="p-8 border-x-2 border-b-2 rounded-t-none rounded-b-xl bg-azulClaro md:border-t-2 md:border-l-0 md:rounded-l-none md:rounded-r-xl">
                <div className="uppercase  text-md text-verdeContraste font-semibold">{card.nomeEmpresa}</div>
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-brancoTexto hover:underline">{card.cargo}</a>
                <p className="mt-2 text-brancoDescricao">{card.descricaoCurta}</p>
            </div>
        </div>
     );
}

export default Card;