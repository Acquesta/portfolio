function Icon({ icon }) {

    return ( 
        <div className="h-full mx-auto">
            <img className="h-full p-1 border-2 border-brancoDescricao rounded-lg"  src={icon} alt="" />
            <h3></h3>
        </div>
     );
}

export default Icon;