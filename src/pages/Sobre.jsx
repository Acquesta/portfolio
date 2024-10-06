import Projetos from "../components/projetos";
import SectionSobre from "../components/sobre/Index";

function Sobre() {
    return ( 
        <div className="py-10 ">
            <SectionSobre />
            <Projetos />
        </div>
     );
}

export default Sobre;