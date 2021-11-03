import ItemMain from "./ItemMain"

const ItemDetail = ({ items }) => {
    return(
        <div className="item-main">
            {items.map(products =>{
                return <ItemMain key={products.id} item={products}/>
            })}
        </div>
    )
    
}
export default ItemDetail