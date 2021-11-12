import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { storeContext } from "./CartContext"


const Cart = () => {

    const {products, removeItem, totalProductsPrice, clearCart} = useContext(storeContext);

    if(products.length === 0){
        return (
                <div>
                    <h3 className="textCart">No hay productos agregados al Carrito</h3>
                    <NavLink to="/" exact className="keypadCart">
                        <button className="finishShop">Ir al catálogo</button>
                    </NavLink>
                </div>
        )
    } else {
        return (
            <div>
                <h3 className="textCart">Carrito de Compras</h3>
                <div className="containerCart">
                    {products.map(plants => (
                        <div key={plants.id} className="containerProduct">
                            <img src={plants.img} alt="Foto del producto" width="80"/>
                            <h4>{plants.title}</h4>
                            <h4>${plants.price}</h4>
                            <h4>Cantidad: {plants.dataCounter}</h4>
                            <h4>SubTotal: $ {plants.price * plants.dataCounter}</h4>
                            <button className="button-buy" onClick={() => removeItem(plants.id)}>X</button>
                        </div>
                    ))}
                </div>
                    <h3 className="textCartFinish">Total de la compra: $ {totalProductsPrice()}</h3>
                <div className="keypadCart">
                    <NavLink to="/" exact>
                        <button className="button-buy">Seguir Comprando</button>
                    </NavLink>
                    <button className="button-buy">Finalizar</button>
                    <button className="button-buy" onClick={() => clearCart()}>Limpiar Carrito</button>
                </div>
            </div>
        )
    }

}

export default Cart