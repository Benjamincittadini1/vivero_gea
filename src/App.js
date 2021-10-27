import ItemCount from "./components/ItemCount"
import Footer from "./components/Footer"
import ItemLIstContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
    return(
        <>
        <NavBar/>
        <ItemLIstContainer/>
        <ItemCount stock="9" initial="" />
        <Footer/>
        </>
    )
}

export default App