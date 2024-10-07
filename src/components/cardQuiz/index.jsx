import { useState, useEffect } from "react";
import Resposta from "./Resposta";
import { NavLink } from "react-router-dom";

function CardQuiz({ quiz, idUser }) {

    const usuarios = JSON.parse(localStorage.getItem('Usuarios'))
    const usuario = usuarios.find(usuario => usuario.id == idUser)

    useEffect(() => {
        setRespostaUser('')
    })
    
    const [respostaUser, setRespostaUser] = useState('')
    const [input, setInput] = useState('')
    
    const respostaClicada = (input) => {
        console.log(input);
        setInput(input)
        if(input == quiz.answer){
            // console.log('Resposta certa');
            usuario.quizzes.pontos += 10
            usuario.quizzes.acertos += 1
            setRespostaUser('correta')
        }else{
            // console.log('resposta errada');
            usuario.quizzes.erros += 1
            setRespostaUser('errada')
        }
        usuario.quizzes.quizAtual = quiz.id + 1
        console.log(usuarios);
        localStorage.setItem('Usuarios', JSON.stringify(usuarios))
    }
    
    return ( 
        <div className="w-[80vw] h-[50vw] shadow-2xl mx-auto my-[2vw] pt-4 flex flex-col justify-evenly">
            <h2 className="text-center text-[4vw] ">Questão {quiz.id + 1}</h2>
            <div className="w-full h-1 bg-azulMahindra"></div>
            <h3 className="text-center text-[3vw]">{quiz.question}</h3>
            <div className="p-10 flex flex-wrap justify-between gap-6">
                {
                    quiz.options.map((resposta) => {
                        let corInput = ''
                        if(respostaUser == 'correta' && quiz.answer == resposta){
                            // console.log('Mudando para cor correta');
                            corInput = 'correta'
                        }
                        else if (respostaUser == 'errada' && input == resposta){
                            // setRespostaUser('correta')
                            // console.log('Mudando para cor errada');
                            corInput = 'errada'
                        }

                        if(respostaUser == 'errada' && quiz.answer == resposta){
                            corInput = 'correta'
                        }


                        return <Resposta
                            key={resposta}
                            resposta={resposta}
                            corInput={corInput}
                            funcao={respostaClicada}
                        />
                    })
                }
            </div>
            <button className={`bg-azulMahindra text-branco mx-auto px-12 py-3 rounded-xl`}>
                {
                    quiz.id + 1 == 10 ? 
                        <NavLink to={`/quizFinal/${idUser}`}>Terminar</NavLink> : 
                        <NavLink to={`/quiz/${idUser}/${quiz.id + 1}`} >Continuar</NavLink>
                }
                
            </button>
        </div>
     );
}

export default CardQuiz;