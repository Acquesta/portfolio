function Button({ children }) {
    return ( 
        <button className="bg-verdeContraste px-6 py-1 rounded-lg text-azulClaro font-bold cursor-pointer">
            {children}
        </button>
     );
}

export default Button;