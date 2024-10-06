import Lorenzo from '../../assets/images/fotoLorenzo.jpg'


function SectionSobre() {
    return ( 
        <div className="flex flex-col justify-between items-center mx-auto sm:flex-row-reverse w-[90%]">
            <div className="h-[30vh] w-[90%] mx-auto mt-10 bg-brancoDescricao rounded-xl sm:w-[30vh]">
                <img src={Lorenzo} alt="foto do lorenzo" className='h-[30vh] w-full rounded-xl'/>
            </div>
            <div className="sm:w-[50%] w-full px-4">
                <h2 className="mt-10 text-3xl text-center text-brancoTexto sm:text-start">Sobre</h2>
                <p className="text-brancoDescricao mt-5">Sou o <span className='text-verdeContraste'>Lorenzo</span>, tenho 18 anos, e estou cursando engenharia de software, mas ja desenvolvo há três anos com a escola e cursos da alura. Procuro uma oportunidade no mercado de TI, uma área do futuro e que ainda temos muito a criar pela frente.</p>
            </div>
        </div>
     );
}

export default SectionSobre;