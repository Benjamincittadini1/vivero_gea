import Item from "./Item"

const ItemList = ({ items }) => {
    return(
        <div className="item-container">
            {items.map(item =>{
                return <Item key={item.id} plants={item}/>
            })}
        </div>
    )
    
}
export default ItemList