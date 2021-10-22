import Footer from "./components/Footer"
import ItemLIstContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
    return(
        <>
        <NavBar/>
        <ItemLIstContainer greetings="Bienvenido"/>
        <Footer/>
        </>
    )
}

export default App