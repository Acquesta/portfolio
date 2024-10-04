import Button from './Button.jsx'

function Apresentacao() {
    return ( 
        <div className="h-[60vh] text-center flex flex-col justify-center items-center pt-10 sm:w-[60vw] sm:text-left sm:items-start sm:ml-8">
            <h1 className="w-1/2 text-xl font-bold text-brancoTexto sm:w-full">Olá! Meu nome é Lorenzo Acquesta.</h1>
            <h2 className="text-xl text-verdeContraste font-bold">Sou Engenheiro de Software</h2>
            <p className="text-brancoDescricao w-2/3 mt-5">Desenvolvo aplicações web e mobile, também crio design para melhores experiências. </p>
            <div className="w-full flex justify-evenly mt-6 sm:justify-between sm:w-[45vw]">
                <Button>Meus projetos</Button>
                <Button>Contato</Button>
            </div>
        </div>
     );
}

export default Apresentacao;