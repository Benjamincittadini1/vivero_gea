
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { storeContext } from "./CartContext";
import {NavLink} from "react-router-dom"

const ItemDetail = ({plants}) => {

  const {addItem} = useContext(storeContext);
  const [show, setShow] = useState(false);


  const getDataCounter = (dataCounter) => {
    addItem(plants, dataCounter);
    setShow(!show);
}

    return (
        <>
        <div className="cards cards-individual">
           <section className="card card-individual"> 
           <img src={plants.img} alt="" width="250" height="250"/>
           <div className="detail_individual">
           <h3 className="card__category">{plants.title}</h3>
           <h5 className="card__title">{plants.price}</h5>
           <p className="card__by">{plants.description}</p>
           <ItemCount stock={7} initial={1} onAdd={getDataCounter}/>
           <NavLink to={`/Cart`}>
                {show ? <button className="button-buy">Finalizar compra</button> : null}
            </NavLink>
           </div>
           </section>

        </div>
      </>
    )
}

export default ItemDetail;