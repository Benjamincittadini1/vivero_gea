
import ItemCount from "./ItemCount";

const ItemDetail = ({img, title, price, description}) => {


  const getDataCounter = (dataCounter) => {
    alert(`Se agregaron ${dataCounter} ${title} al carrito`);
}

    return (
        <>
        <div className="cards cards-individual">
           <section className="card card-individual"> 
           <img src={img} alt="" width="250" height="250"/>
           <div className="detail_individual">
           <h3 className="card__category">{title}</h3>
           <h5 className="card__title">{price}</h5>
           <p className="card__by">{description}</p>
           <ItemCount stock={7} initial={0} onAdd={getDataCounter}/>
           </div>
           </section>

        </div>
      </>
    )
}

export default ItemDetail;