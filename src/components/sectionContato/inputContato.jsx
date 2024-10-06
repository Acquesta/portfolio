function Input({ index, label, funcaoValue }) {
    return ( 
        <>
            <label className="text-lg text-brancoDescricao" htmlFor="">{label}</label>
            <input onChange={(e) => funcaoValue(e.target.value, index)} className="my-3 bg-transparent border-2 border-brancoTexto rounded-lg text-brancoTexto px-4 py-1" type='text' />
        </>
     );
}

export default Input;