import ItemCount from "./components/ItemCount"
import Footer from "./components/Footer"
import ItemLIstContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
    return(
        <>
        <NavBar/>
        <ItemLIstContainer/>
        <ItemCount stock={18} initial={8} />
        <Footer/>
        </>
    )
}

export default App