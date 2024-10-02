import { Outlet } from "react-router-dom";
import Hotbar from "./components/hotbar";

function App() {
  return (
    <div className="bg-azulClaro">
      <Hotbar />
      <Outlet />      
    </div>
  );
}

export default App;
