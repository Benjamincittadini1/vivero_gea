
const ItemMain = ({ item }) => {
    return (
        <>
        <div className="item-detail">
            <img src={item.img} width="400" height="400" alt=""></img>
            <span className="card__category"> {item.title}</span>
            <h3 className="card__title">{item.description}</h3>
            <span className="card__by">${item.price}</span>
        </div>
           
        </>
    )


}

export default ItemMain