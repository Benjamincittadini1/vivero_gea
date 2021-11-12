import { useState } from "react";
import { NavLink } from "react-router-dom";


const ItemCount = ({stock, initial, onAdd}) => {

    const [state, setState] = useState(initial);

    const showCounterAdd = () => {
        if (state < stock) {
            setState(state + 1);
        } else {
            alert(`Lo sentimos, solo poseemos ${stock} unidades`)
            setState(stock)
        }
    }

    const showCounterLess = () => {
        if(state > 0) {
            setState(state - 1);
        } else {
            alert(`Debe elegir al menos 1`)
            setState(state)
        }
    }


    return (
        <>
        <div className="keypad">
            <button onClick={showCounterLess} className="button-add">-</button>
            <p className="buttonAddState">{state}</p>
            <button onClick={showCounterAdd} className="button-add">+</button>
        </div>
        <div>
            <NavLink to={`/Cart`}>
                <button onClick={()=>onAdd(state)} className="button-buy-ind">Agregar al carrito</button>
                </NavLink>
        </div>
        </>
    )


}

export default ItemCount;