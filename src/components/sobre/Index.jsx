
function SectionSobre() {
    return ( 
        <div className="flex flex-col justify-between items-center mx-auto sm:flex-row-reverse w-[90%]">
            <div className="h-[30vh] w-[90%] mx-auto mt-10 bg-brancoDescricao rounded-xl sm:w-[30vh]"></div>
            <div className="sm:w-[50%] w-full px-4">
                <h2 className="mt-10 text-3xl text-center text-brancoTexto sm:text-start">Sobre</h2>
                <p className="text-brancoDescricao mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia totam cum nemo suscipit facere, consequuntur harum. Eveniet magni fugit, soluta perferendis aut, reiciendis fuga officia possimus vel beatae obcaecati dolore?</p>
            </div>
        </div>
     );
}

export default SectionSobre;