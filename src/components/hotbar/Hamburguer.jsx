function Hamburguer({ hamburguer }) {

  return (
    <>
        {
            hamburguer == 'hamburguer' ? (
                <>
                    <div className="h-[3px] bg-brancoTexto rounded-sm"></div>
                    <div className="h-[3px] bg-brancoTexto rounded-sm"></div>
                    <div className="h-[3px] bg-brancoTexto rounded-sm"></div>
                </>
            ) : (
                <>
                    <div className="h-[3px] bg-brancoTexto rounded-sm rotate-45 translate-y-2"></div>
                    <div className="h-[3px] bg-brancoTexto rounded-sm -rotate-45 -translate-y-2"></div>
                </>
            )
        }
      
    </>
  );
}

export default Hamburguer;
