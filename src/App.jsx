import { Outlet } from "react-router-dom";
import Hotbar from "./components/hotbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-azulClaro">
      <Hotbar />
      <Outlet />      
      <Footer />
    </div>
  );
}

export default App;
