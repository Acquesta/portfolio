import { useNavigate } from "react-router-dom";
import Entrada from "../components/entrada/Entrada";

const inputs = [
    {
        id: 0,
        label: 'E-mail',
        type: 'text',
        value: ''
    },
    {
        id: 1,
        label: 'Senha',
        type: 'password',
        value: '',
        esqueceuSenha: true
    }
]

function Login() {

    const navigate = useNavigate();

    const cadastrarValues = (input, value) => {        
        for(let i = 0; i < inputs.length; i++){
            if(input == inputs[i].id){
                inputs[i].value = value
            }
        }
    }

    const logar = () => {
        let usuario = {
            email: inputs[0].value,
            senha: inputs[1].value
        }

        let validaUsuario = verificaUsuario(usuario)
        console.log(validaUsuario);
        if(validaUsuario[0]){
            navigate(`/quizzes/${validaUsuario[1]}`)
        }else{
            alert('Senha ou email incorretos')
        }
    }

    function verificaUsuario(usuario){
        let usuarios = JSON.parse(localStorage.getItem('Usuarios'))
        for(let i = 0; i < usuarios.length; i++){
            console.log(usuarios[i]);
            if(usuario.email == usuarios[i].email && usuario.senha == usuarios[i].senha){
                return [true, usuarios[i].id]
            }
        }
        return [false, '']
    }

    return ( 
        <>
            <Entrada 
                title='Login'
                inputs={inputs}
                submit='Entrar'
                funcaoValues={cadastrarValues}
                funcaoSubmit={logar}
            />
        </>
     );
}

export default Login;