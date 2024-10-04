import fiap from '../../assets/images/fiap.png'
import bp from '../../assets/images/bp.png'

import Card from './Card';


const cards = [
    {
        nomeEmpresa: 'Fiap',
        cargo: 'Estagio de TI',
        comeco: '08/2024',
        final: 'atualmente',
        descricaoCurta: 'Monitorar as salas de aulas da Fiap, auxilio com toda a estrutura dos laboratórios, desde teclados até projetores. Também auxilio os professores com as aulas.',
        descricaoCompleta: 'Monitorar as salas de aulas da Fiap, auxilio com toda a estrutura dos laboratórios, desde teclados até projetores. Também auxilio os professores com as aulas. Além de monitorar as aulas eu ajudo a apresentar a Fiap para outras escolas participando de uma dinâmica de desenho com os computadores. Também ja fui com Fiap para feira de profissões apresentar a Fiap como faculdade de tecnologia.',
        imagem: fiap
    },
    {
        nomeEmpresa: 'BP',
        cargo: 'Jovem Aprendiz',
        comeco: '01/2024',
        final: '07/2024',
        descricaoCurta: 'Ajudar a conferir as autorizações de exames de sangue e imagem, e inserir exames não colocados pelo atendente.',
        descricaoCompleta: '',
        imagem: bp
    }
]

function Experiencias() {
    return ( 
        <div className='pb-10'>
            <h2 className="font-bold text-xl text-brancoTexto text-center mb-4">Experiência</h2>
            <div className=" max-w-md mx-auto overflow-hidden md:max-w-2xl">
                {
                    cards.map(card => (
                        <Card card={card} />
                    ))
                }
            </div>
        </div>
     );
}

export default Experiencias;