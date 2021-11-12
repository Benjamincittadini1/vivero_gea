import { Link } from "react-router-dom"

const Item = ({ plants }) => {
    return (
        <>
            <section className="cards">
                <div className={`div${plants.id}`}>
                <article className="card card--1">
                    <img src={plants.img} width="250" height="250" alt="" />
                    <a href="#" className="card_link">
                        <div className="card__img--hover"></div>
                    </a>
                    <div className="card__info">
                        <span className="card__category"> {plants.title}</span>
                        <h3 className="card__title">{plants.description}</h3>
                        <span className="card__by">${plants.price}</span>
                        <br/>
                        <Link to={`/${plants.id}`}>
                        <button className="button-buy">Detalles</button>
                        </Link>
                    </div>
                </article>
                </div>


            </section>
        </>
    )


}

export default Item