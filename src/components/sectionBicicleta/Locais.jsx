import locaisBikes from "../../assets/image/locaisBikes.png";

function Locais() {
    return ( 
        <>
            <h2 className='text-5xl text-center text-azulMahindra uppercase mt-10'>Confira os locais</h2>
            <div className='flex justify-between items-center mx-8 mt-10'>
                <div className='h-[60vh] my-10 mx-auto'>
                    <img className='h-full' src={locaisBikes} alt="" />
                </div>
                <div className='flex flex-col gap-10 mr-14 w-1/3'>
                    <p className='text-4xl text-azulMahindra uppercase'>Pegue a bicicleta mais perto de você</p>
                    <button className='border-2 border-azulMahindra rounded-lg text-azulMahindra text-xl font-bold py-2'>Pegar bicicletas</button>
                </div>
            </div>
        </>
     );
}

export default Locais;