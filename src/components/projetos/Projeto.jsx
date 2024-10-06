function Projeto({ projeto }) {
    return ( 
        <div className="w-[90%] mt-5 mx-auto flex flex-col sm:flex-row lg:w-2/3">
            <div className="w-full h-[20vh]  bg-azulEscuro rounded-xl sm:w-[50vw] sm:h-auto">
                
            </div>
            <div className="flex flex-col justify-around my-4 sm:mx-6 sm:w-full sm:my-0">
                <h2 className="text-xl text-brancoTexto ">Nome do projeto</h2>
                <p className="text-brancoDescricao mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, nemo sunt. Dolore iusto rem, ducimus eaque amet aspernatur quod illum corrupti dolores, pariatur magni quam. Possimus minus sapiente adipisci quibusdam.</p>
                <div className="flex w-2/3 justify-between my-2">
                    <p className="text-verdeContraste px-2 py-1 border-2 border-verdeContraste rounded-lg" >Typescript</p>
                    <p className="text-verdeContraste px-2 py-1 border-2 border-verdeContraste rounded-lg" >React</p>
                    <p className="text-verdeContraste px-2 py-1 border-2 border-verdeContraste rounded-lg" >Firebase</p>
                </div>
                <a href="#" className="bg-brancoDescricao text-center my-3 py-2 px-4 rounded-xl font-bold text-azulClaro">Ver projeto</a>
            </div>
        </div>
     );
}

export default Projeto;