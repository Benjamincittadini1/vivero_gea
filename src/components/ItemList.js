import Item from "./Item"

const ItemList = ({ items }) => {
    return(
        <div className="item-container">
            {items.map(products =>{
                return <Item key={products.id} item={products}/>
            })}
        </div>
    )
    
}
export default ItemList