import { useState } from "react"

function ItemCount({stock, initial}){
    const [cantidad, setCantidad] = useState(1)

    const aumentarCantidad = () => {
        if (cantidad < stock){
        setCantidad(cantidad + 1)
    }else{
        setCantidad(cantidad + 0)
    }
    }

    const restarCantidad = () => {
        if (cantidad > stock)
        setCantidad(cantidad - 1)
    }
 return (
     <div className="ItemCount">
     <div className="btnContador">
         <button onClick={() => restarCantidad()}>-</button>
         <h1>{cantidad}</h1>
        <button onClick={() => aumentarCantidad()}>+</button>
     </div>
     <div className="addCarrito">
         <button>Agregar al carrito</button>
     </div>
     </div>

 )
}
export default ItemCount