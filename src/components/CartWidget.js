import {GrCart} from "react-icons/gr"
import { NavLink } from "react-router-dom";


const ShoppingCart = () => {
    return(
        <NavLink to={`/cart`}>
          <div>
            <GrCart color="white" size="30px"/>
          </div>
        </NavLink>
    )
}

export default ShoppingCart;