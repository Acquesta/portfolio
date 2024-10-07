import { useEffect, useState } from "react";

function Resposta({ resposta, funcao, corInput = 'preto'}) {

    const [cor, setCor] = useState(corInput);
    const [corFundo, setCorFundo] = useState('branco')

    useEffect(() => {
        if(corInput == 'correta'){
            setCorFundo('correta')
        }else if (corInput == 'errada'){
            setCorFundo('errada')
        }
    })

    return ( 
        <>  
            
            <div onClick={() => {funcao(resposta)}} className={`flex justify-between items-center w-[30vw] bg-${corFundo} border-${cor} border-2 px-3 py-3 rounded-2xl hover:cursor-pointer shadow-xl`}>
                <div className="absolute bg-correta"></div>
                <div className="absolute bg-errada"></div>
                <div className={`w-[4vw] h-[4vw] border-${cor} border-2 rounded-full`}>
                </div>
                <p className={`text-${cor} `}>{resposta}</p>
            </div>
        </>
     );
}

export default Resposta;