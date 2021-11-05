
import ItemCount from "./ItemCount";

const ItemDetail = ({img, title, price, description}) => {
    return (
        <>
        <div className="productCatalogItems">
           <section className="asaid"> 
           <img src={img} alt="" width="250" height="250"/>
           <h3>{title}</h3>
           <h5>{price}</h5>
           <p>{description}</p>
           <ItemCount stock={7} initial={0} onAdd={function(){alert(`Se agregaron x items al carrito`)}}/>
           </section>
        </div>
      </>
    )
}

export default ItemDetail;