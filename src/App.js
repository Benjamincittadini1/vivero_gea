
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart"
import ShoppingContext from "./components/CartContext";
import ItemListContainer from "./components/ItemListContainer"


const AppBooks = () => {
    return (
        <>
        <BrowserRouter>
        <ShoppingContext>
            <NavBar/>
            {/* <ItemDetailContainer/> */}
            <Route exact path="/" exact component={ItemListContainer}/>
            <Route exact path="/description/:prodDescription" component={ItemListContainer}/>
            <Route exact path="/:id" component={ItemDetailContainer}/>
            <Route path="/cart" component={Cart} exact/>
            <Footer/>
        </ShoppingContext>    
        </BrowserRouter>
        
        </>
    )
}


export default AppBooks;