function Apresentacao() {
    return ( 
        <div className="h-[60vh] text-center flex flex-col justify-center items-center ">
            <h1 className="w-1/2 text-xl font-bold text-brancoTexto">Olá! Meu nome é Lorenzo Acquesta.</h1>
            <h2 className="text-xl text-verdeContraste font-bold">Sou Engenheiro de Software</h2>
            <p>Desenvolvo aplicações web e mobile, também crio design para melhores experiências. </p>
            <div>
                <button>Meus projetos</button>
                <button>Contato</button>
            </div>
        </div>
     );
}

export default Apresentacao;