
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer";


const AppBooks = () => {
    return (
        <>
        <BrowserRouter>
            <NavBar/>
            {/* <ItemDetailContainer/> */}
            <Route exact path="/" exact component={ItemListContainer}/>
            <Route exact path="/description/:descriptionId" component={ItemListContainer}/>
            <Route exact path="/:id" component={ItemDetailContainer}/>
            <Footer/>
        </BrowserRouter>
        </>
    )
}


export default AppBooks;