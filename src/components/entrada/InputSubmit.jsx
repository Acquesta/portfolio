import google from '../../assets/icons/google.svg'

function InputSubmit({ value, funcao }) {
    return ( 
        <div className="flex flex-col w-[100%] justify-center items-center">
            <button onClick={ funcao } className="w-[100%] bg-azulMahindra my-4 py-2 text-branco text-xl font-bold rounded-full" >{value}</button>
            <p className="text-center text-[13px]">ou</p>
            <button className="flex items-center my-4 px-5 py-3 border-2 border-[#A9B7CC] rounded-full"><img className='w-1/4- mr-3' src={google} alt="icone do google" />Entre com o Google</button>
        </div>
     );
}

export default InputSubmit;