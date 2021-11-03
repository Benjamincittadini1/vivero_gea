
const Item = ({ item }) => {
    return (
        <>
            <section className="cards">
                <div className={`div${item.id}`}>
                <article className="card card--1">
                    <img src={item.img} width="250" height="250" alt="" />
                    <a href="#" className="card_link">
                        <div className="card__img--hover"></div>
                    </a>
                    <div className="card__info">
                        <span className="card__category"> {item.title}</span>
                        <h3 className="card__title">{item.description}</h3>
                        <span className="card__by">${item.price}</span>
                        <br/>
                        <button className="button-buy">Agregar al carrito</button>
                    </div>
                </article>
                </div>


            </section>
        </>
    )


}

export default Item