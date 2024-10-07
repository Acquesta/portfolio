import fotoBike from '../../assets/image/bikes-e.png'
import Locais from './Locais';
import Progresso from './Progresso';

function SectionBicicleta() {
    return ( 
        <>
            <div className='flex justify-between items-center mx-8 mt-10'>
                <div className='flex flex-col gap-10 m-14'>
                    <h2 className='text-5xl text-azulMahindra uppercase'>Bicicletas connect-e</h2>
                    <p className='text-xl text-azulMahindra uppercase'>Ande e ganhe pontos</p>
                    <button className='border-2 border-azulMahindra rounded-lg text-azulMahindra text-xl font-bold py-2'>VER BICICLETAS</button>
                </div>
                <div className='h-[50vh] my-10 mx-auto'>
                    <img className='h-full' src={fotoBike} alt="" />
                </div>
            </div>
            <Locais />
            <Progresso />
        </>
     );
}

export default SectionBicicleta;