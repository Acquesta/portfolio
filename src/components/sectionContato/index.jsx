import Input from "./inputContato";

let inputs = [
    {
        id: '1',
        label:'Nome',
        value: ''
    },
    {
        id: '2',
        label: 'Email',
        value: ''
    },
    {
        id: '3',
        label: 'Descrição',
        value: ''
    },
]

function SectionContato() {

    const valueInput = (value, index) => {
        inputs[index].value = value
        // console.log(inputs[index]); 
    }

    const enviarContato = () => {
        alert('Contato enviado por email')
        console.log(inputs);
        
    }

    return ( 
        <div className="py-56">
            <h2 className="text-xl text-brancoTexto text-center">Entre em contato comigo</h2>
            <div className="w-2/3 flex flex-col justify-center mt-10 mx-auto md:w-1/2">
            
                {
                    inputs.map((input) => {
                        return <Input key={input.id} index={input.id - 1} label={input.label} funcaoValue={valueInput}/>
                    })
                }

                <button onClick={() => enviarContato()}  className="bg-brancoDescricao py-2 my-3 rounded-xl font-bold text-azulClaro">Enviar</button>

            </div>
        </div>
     );
}

export default SectionContato;