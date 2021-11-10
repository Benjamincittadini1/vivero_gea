import ItemDetail from "./ItemDetail";
import products from "./products.json";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    
    const [producto,setProducto]=useState([])
    const {id} = useParams();

    const results = products.filter(product => product.id == id);

    const getItem = () => {
        return new Promise((resolve,reject) => {
            setTimeout(()=>{
                resolve(results)
            },1000  );
        });
    }


        useEffect(()=>{
            getItem().then(setProducto)
        }, []);

    // console.log(saga);

    return (
        <section className={`div${producto.id}`}>
            <div className="productCatalog">
                {producto.map(producto => 
                        <ItemDetail 
                        key={producto.id}
                        img={producto.img}
                        title={producto.title}
                        price={producto.price}
                        description={producto.description}
                        />)}
            </div>
        </section>
    )
}

export default ItemDetailContainer;