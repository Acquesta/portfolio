import progresso from '../../assets/image/progresso.png'

function Progresso() {
    return ( 
        <div className="bg-azulMahindra py-10 mb-5">
            <h2 className='text-5xl text-branco text-center'>SEU PROGRESSO</h2>
            <div className='mx-20 my-20'>
                <img className='w-full ' src={progresso} alt="" />
            </div>
            <div className='flex justify-between mx-20 font-bold'>
                <h2 className='text-6xl text-branco'>META: 1km</h2>
                <h2 className='text-6xl text-[#99FF88]'>PONTOS: 100</h2>
            </div>
        </div>
     );
}

export default Progresso;