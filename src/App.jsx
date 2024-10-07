import { Outlet } from "react-router-dom"
import Hotbar from "./components/Hotbar"
import Footer from "./components/footer"

function App() {

  return (
    <>
      <Hotbar />
      <Outlet context={'Batata'} />
      <Footer />
    </>
  )
}

export default App
