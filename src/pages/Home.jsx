import Apresentacao from "../components/apresentacao";
import Experiencias from "../components/experiencia";
import Skills from "../components/skills";

function Home() {
    return ( 
        <>
           <Apresentacao />
           <Skills />
           <Experiencias/>
        </>
     );
}

export default Home;