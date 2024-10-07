import { NavLink, useParams } from "react-router-dom";

function calcularTempoDecorrido(tempoInicial, tempoFinal) {
    // Extrai as horas, minutos e segundos de cada array
    const [horaInicial, minutoInicial, segundoInicial] = tempoInicial;
    const [horaFinal, minutoFinal, segundoFinal] = tempoFinal;
  
    // Converte os tempos para segundos para facilitar o cálculo
    const tempoInicialEmSegundos = horaInicial * 3600 + minutoInicial * 60 + segundoInicial;
    const tempoFinalEmSegundos = horaFinal * 3600 + minutoFinal * 60 + segundoFinal;
  
    // Calcula a diferença em segundos
    let diferencaEmSegundos = tempoFinalEmSegundos - tempoInicialEmSegundos;
  
    // Ajusta a diferença para valores positivos, caso o tempo inicial seja maior que o final
    if (diferencaEmSegundos < 0) {
      diferencaEmSegundos += 24 * 3600; // Adiciona um dia em segundos
    }
  
    // Converte a diferença em segundos para horas, minutos e segundos
    const horas = Math.floor(diferencaEmSegundos / 3600);
    const minutos = Math.floor((diferencaEmSegundos % 3600) / 60);
    const segundos = diferencaEmSegundos % 60; 
  
    // Retorna o resultado em um array
    return [horas, minutos, segundos];
  }

function CardQuizFinal() {

    const { id }  = useParams()

    const date = new Date
    const dataAgora = [date.getHours(), date.getMinutes(), date.getSeconds()]

    const usuarios = JSON.parse(localStorage.getItem('Usuarios'));
    const usuario = usuarios.find(usuario => usuario.id == id)

    const dataComeco = usuario.quizzes.comeco
    console.log(dataComeco, dataAgora);

    const tempoTotal = calcularTempoDecorrido(dataComeco, dataAgora)

    return ( 
      <div className="w-[80vw] h-[50vw] shadow-2xl mx-auto my-[2vw] pt-4 flex flex-col justify-evenly">
      <h2 className="text-center text-[4vw] ">Questão 1</h2>
      <div className="w-full h-1 bg-azulMahindra"></div>
      <h3 className="text-center text-[3vw] font-bold">Parabéns</h3>
      <h2 className="text-center text-[3vw]" >Você concluiu seu primeiro quiz</h2>
      <h2 className="text-center text-[3vw] font-bold text-azulMahindra" >+ {usuario.quizzes.pontos} pontos</h2>
      <h2 className="text-center text-[3vw]" >Foi seu tempo record</h2>
      <h2 className="text-center text-[3vw] font-bold text-azulMahindra" >{tempoTotal[1]}:{tempoTotal[2]}</h2>
      <button className={`bg-azulMahindra text-branco mx-auto px-12 py-3 rounded-xl`}>
          <NavLink to={`/quizzes/${id}`}>Concluir</NavLink>
      </button>
  </div>
     );
}

export default CardQuizFinal;