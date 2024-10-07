import { useEffect, useState } from "react";

function Amigo({ usuario, best }) {

    const [trofeu, setTrofeu] = useState('hidden');

    useEffect(() => {
        if(best){
            setTrofeu('block');
        }
    })

    return (
        <li className="flex justify-between items-center mx-10 my-3">
            <div className={`${trofeu} absolute ml-[-15px] rotate-12`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.7" stroke="#FFD500" className="size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                </svg>
            </div>
            <div className="flex justify-between items-center">
                <div className="w-[5vw] h-[5vw] bg-[#A9B7CC] rounded-full"></div>
                <h3 className="text-[1vw] font-semibold ml-6">{usuario.nome}</h3>
            </div>
            <h3 className="text-[1.5vw] text-azulMahindra font-semibold">{usuario.quizzes.pontos}</h3>
        </li>
        
    );
}

export default Amigo;