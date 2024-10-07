import { useParams } from "react-router-dom";
import HomeQuizzes from "../components/homeQuizzes";

function Quizzes() {
    
    const usuarios = JSON.parse(localStorage.getItem("Usuarios"));
    const { id } = useParams()
    const usuario = usuarios.find(usuario => usuario.id == id)

    const pontos = usuario.quizzes.pontos

    return ( 
        <>
            <HomeQuizzes 
                title = {pontos != 0 ? 'Você tem ' : 'Comece sua jornada e ganhe'}
                pontos = {pontos}
            />
        </>
     );
}

export default Quizzes;