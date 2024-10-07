function CardPontos({ pontos }) {
    return ( 
        <div className=" w-[90vw] flex flex-col justify-start mx-8 my-10 p-5 shadow-xl rounded-lg border-azulMahindra border-2">
            <h2 className="text-3xl justify-start">Seus pontos</h2>
            <p className="text-2xl text-azulMahindra font-semibold my-4">{pontos}</p>
            <div className="flex justify-between text-xl my-5">
                <p>Entre na comunidade</p>
                <p className="text-azulMahindra font-semibold">+ 100 pontos</p>
            </div>
            <div className="flex justify-between text-xl">
                <p>Jogue os quizzes</p>
                <p className="text-azulMahindra font-semibold">+ 200 pontos</p>
            </div>
        </div>
     );
}

export default CardPontos;