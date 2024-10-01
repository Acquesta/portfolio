import { Outlet } from "react-router-dom";
import Hotbar from "./components/hotbar";

function App() {
  return (
    <>
      <Hotbar />
      <Outlet />      
    </>
  );
}

export default App;
