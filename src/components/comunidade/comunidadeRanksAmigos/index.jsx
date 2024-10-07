import Amigo from "./Amigo";

function ComunidadeRanksAmigos({ usuarios, usuario, amigos }) {

    let rankAmigos = [usuario]

    usuarios.forEach(usuario => {
        amigos.forEach(amigo => {
            if(usuario.id == amigo){
                rankAmigos.push(usuario)
            }
        })
    });

    for(let i = 0; i < rankAmigos.length; i++){
        if(i + 1 < rankAmigos.length){
            console.log(rankAmigos[i + 1].quizzes.pontos );
            
            if(rankAmigos[i].quizzes.pontos < rankAmigos[i + 1].quizzes.pontos){
                
                let aux = rankAmigos[i]
                console.log(aux);
                
                rankAmigos[i] = rankAmigos[i + 1]
                rankAmigos[i + 1] = aux 
            }
        }
    }

    console.log(rankAmigos);
    
    
    return (
        <div className="w-[90%] mx-auto my-6">
            <h2 className="text-[3vw]">Amigos</h2>
            <div className="border-2 border-azulMahindra rounded-xl mt-10 p-6">
                <ul>
                    {
                        rankAmigos.map((usuario, index) => {                            
                            return <Amigo key={index} usuario={usuario} best={index == 0 ? true : false} />
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default ComunidadeRanksAmigos;